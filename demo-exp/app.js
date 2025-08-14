const express= require("express");

const app =express()

app.get("/",(req ,res)=>{
    console.log("Hello World!");// appears in console
    res.send("response to Wordlink Class 192.168.1.122:3000");// appears in browser
    // res.render(<!DOCTYPE html>)

});

app.use("/all",require("./route"));

    
app.listen(4000, () => {
    console.log("Express app is not running on port 4000");
});


// mysql connection //





