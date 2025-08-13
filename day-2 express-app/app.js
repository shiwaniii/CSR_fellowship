const express = require("express")
const app = express();

app.get("/users", (req,res) => {
    res.send("Hello, sansar");

});

app.get("/Shiwani", (req,res) => {
    res.send("Hello, Shiwani");

});

app.get("/users/:id", (req,res) => {
    const userId = req.params.id;
    res.send(`Hello, ${userId}`);

});

app.get("/home", (req,res) => {
    const location = req.query.location;
    const name = req.query.name;
    const country = req.query.country;
    res.send(`This is static route; location:${location}, name:${name}, country:${country}`);


});

app.get("/users/:id", (req,res) => {
    const userId = req.params.id;
    res.send(`{This is example of dynamic route Hello User ${userId}`);

});

app.get("/all/:id", (req,res) => {
    const userId = req.params.id;
    const location = req.query.location;
    res.send(`The user id is: ${userId}, location:${location}`);

});

app.get("/profile/:id/education/:education/address/:address/:country", (req,res) => {

    const id= req.params.id;
    const education = req.params.education;
    const address = req.params.address;
    const country = req.params.country;
    const section = req.query.section;
    res.send(`The user id is: ${id}, education:${education}, address:${address}, country:${country}, section:${section}`
    );
    
});


app.listen(3000, () => {
    console.log("Express app is running at port 3000");
});
