const express= require("express");

const app =express()

app.get("/",(req ,res)=>{
    console.log("Hello World!");// appears in console
    res.send("response to Wordlink Class 192.168.1.122:3000");// appears in browser
    // res.render(<!DOCTYPE html>)

});

app.use("/all",require("./route"));

    
app.listen(3000, () => {
    console.log("Express app is not running on port 3000");
});


// mysql connection //

const mysql= require("mysql");
const user = require("../day-2 express-app/user");

const connection = mysql.createConnection({
    host: "localhost",
    user:"root",
    password:"root@123!",
    database:"fellow",
    port:"3307",

});

