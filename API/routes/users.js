const express = require("express");
const sendError = require("../utilities/sendError");
const joi = require("joi");
const mysql = require("mysql");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const config = require("../config/config");
const oauth = require("../middleware/oauth");

const conectionOptionObject = config.db_conection_options;
// !!This is only for the a demo purpose. The privatekey can7t be hard coded it has to be store in an env variable!!
const privateKey = config.privateKey;

const userRooter = express.Router();
//schema for login in the user
const userLoginSchema = joi.object({
    email : joi.string().min(10).max(255).email().required(),
    password : joi.string().length(5).required()
});
//schema for adding a new user
const userSignUpSchema = joi.object({
    name : joi.string().max(50).min(2).required(),
    email : joi.string().min(10).max(255).email().required(),
    password : joi.string().length(5).required()
});

const pool = mysql.createPool(conectionOptionObject);


userRooter.post("/auth", async (req, res) => {

    let user;
    try{
        user = await userLoginSchema.validateAsync(req.body);
    }catch(ex){
        return res.status(400).send(sendError(`An error occured when processing the request body : ${ex.message}`))
    }

    pool.getConnection((err, connection) => {

        if(err) return res.status(504).send(sendError(`An internal error occured when connecteing to the DataBase : ${err.message}`));
        connection.query(`SELECT id, name, email, password FROM users WHERE email='${user.email}'`, async (err, rows) => {
                
            //releasing the connection object after we are done with it
            connection.release();

            if(err) return res.status(504).send(sendError(`An internal error occured when fetching data from the DataBase : ${err.message}`));
            if(rows.length < 1) return res.status(404).send(sendError("Account not found"));
            if( !(await bcrypt.compare(user.password, rows[0].password)) ) return res.status(400).send(sendError("Password incoret"));
           
            const token = await jwt.sign(
                {id : rows[0].id, name : rows[0].name, email : rows[0].email}, 
                privateKey, 
                { expiresIn: config.sessionDuration }
            );

            res.set({
                "x-json-web-token" : token,
                "Set-Cookie" : `token=${token}; path=/api/;`
            });
            res.send([{id : rows[0].id, name : rows[0].name, email : rows[0].email}]);

        });
    });
});

userRooter.post("/", async (req, res) => {

    let user;
    try{
        user = await userSignUpSchema.validateAsync(req.body);
    }catch(ex){
        return res.status(400).send(sendError(`An error occured when processing the request body : ${ex.message}`));
    }

    pool.getConnection( async (err, connection) => {

        if(err) return res.status(504).send(sendError(`An internal error occured when connecteing to the DataBase : ${err.message}`));
        let salt;
        try{
            salt = await bcrypt.genSaltSync(10);
            user.password = await bcrypt.hashSync(user.password, salt);
        }catch(ex){
            return res.status(500).send(sendError(`An error occured when processing the request : ${ex.message}`));
        }
        
        connection.query(`INSERT INTO users(name, email, password) VALUES ('${ user.name }', '${user.email}', '${ user.password }')`, (err, rows) => {
                
            //releasing the connection object after we are done with it
            connection.release();

            if(err) return res.status(504).send(sendError(`An internal error occured when inserting data into the DataBase : ${err.message}`));
            res.status(200).send(rows);
        });
    });
});


userRooter.get("/me", oauth, (req, res) => {

    const token = req.get("x-json-web-token");
    let user;
    try {
        user = jwt.verify(token, privateKey);
    } catch (error) {
        return res.status(400).send(sendError("Session probably expired. Try to login again please"))
    }
    res.send(user);

});

module.exports = userRooter;