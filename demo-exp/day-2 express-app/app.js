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

app.listen(3000, () => {
    console.log("Express app is running at port 3000");
});
