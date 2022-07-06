//packages and libraries
const express = require("express");
const bodyParser = require("body-parser");

//routes
const itemRoute = require("./routes/items");

//middleware

 
//getting started
const app = express();
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());
app.use("/assets", express.static(__dirname + "/uploads"));

//req handling
app.use("/api/items", itemRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=>{console.log(`Listening on ${PORT}...`)});
//This is just a comment line to test gitHub feature

