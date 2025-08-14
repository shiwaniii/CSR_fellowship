const express= require("express");
const useRouter = require("./user")
const app =express()

app.get("/",(req ,res)=>{
    console.log("Hello World!");// appears in console
    res.send("response to Wordlink Class 192.168.1.122:3000");// appears in browser
    // res.render(<!DOCTYPE html>)

});

app.use("/all",require("./route"));
app.use("/user", useRouter);
    
app.listen(3000, () => {
    console.log("Express app is running on port 3000");
});

