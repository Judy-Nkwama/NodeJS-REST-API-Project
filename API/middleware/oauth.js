const jwt = require("jsonwebtoken");
const express = require("express");
const config = require("../config/config");
const sendError = require("../utilities/sendError");
const app = express.Router();

const privateKey = config.privateKey;

const oauth = ( req, res, next ) => {
    
    //res.setHeader("Access-Control-Allow-Origin", "*");
    const token = req.get("x-json-web-token");
    if(!token)res.status(401).send(sendError("You need to login in"));
    
    let user;
    try{
        user = jwt.verify(token, privateKey);
    }catch(ex){
        if(ex.message == "jwt expired") return res.status(401).send(sendError("Your session has expired you need to log in again"));
        res.status(400).send(sendError("Invalid web token. Try to log in again : " + ex.message));
    }

    next();
    
};

module.exports = oauth;

