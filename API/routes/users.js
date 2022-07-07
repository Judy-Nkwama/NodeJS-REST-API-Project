const express = require("express");
const sendError = require("../utilities/sendError");
const joi = require("joi");
const mysql = require("mysql");
const bcryp = require("bcrypt");
const conectionOptionObject = require("../config/config").db_conection_options;

const userRooter = express.Router();

const userLoginSchema = joi.object({
    email : joi.string().min(10).max(255).email().required(),
    password : joi.string().length(5).required()
});
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
        res.status(400).send(sendError(`An error occured when processing the request body : ${ex.message}`))
    }

    pool.getConnection( (err, connection) => {

        if(err) return res.status(504).send(sendError(`An internal error occured when connecteing to the DataBase : ${err.message}`));
        connection.query(`SELECT * FROM users WHERE password='${user.password}' AND email='${user.email}'`, (err, rows) => {
                
            //releasing the connection object after we are done with it
            connection.release();

            if(err) return res.status(504).send(sendError(`An internal error occured when fetching data from the DataBase : ${err.message}`));
            if(rows.length < 1) res.status(400).send(rows);
            res.send(rows);

        });

    });
});

userRooter.post("/", async (req, res) => {

    let user;
    try{
        user = await userSignUpSchema.validateAsync(req.body);
    }catch(ex){
        res.status(400).send(sendError(`An error occured when processing the request body : ${ex.message}`));
    }

    pool.getConnection( async (err, connection) => {

        if(err) return res.status(504).send(sendError(`An internal error occured when connecteing to the DataBase : ${err.message}`));
        
        let salt, hashPassword;
        try{
            salt = await bcryp.genSaltSync(10);
            user.password = await bcryp.hashSync(user.password, salt);
        }catch(ex){
            res.status(400).send(sendError(`An error occured when processing the request body : ${ex.message}`))
        }
        
        connection.query(`INSERT INTO users(name, email, password) VALUES (${ user.name }, ${user.email}, ${ user.password })`, (err, rows) => {
                
            //releasing the connection object after we are done with it
            connection.release();

            if(err) return res.status(504).send(sendError(`An internal error occured when inserting data into the DataBase : ${err.message}`));
            res.send(rows);

        });

    });


});

userRooter.get("/me", (req, res) => {

});


module.exports = userRooter;