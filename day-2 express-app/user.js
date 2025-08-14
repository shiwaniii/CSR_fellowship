const express = require("express");
const user = express.Router();


user.get("/", (req,res) => {
   

    res.send(`This is static route.`);
});

// user.get("/:id", (req,res) => {
//     const userId = req.params.id;
//     res.send(`{This is example of dynamic route Hello User ${userId}`);

// });

// user.get("/:id", (req,res) => {
//     const userId = req.params.id;
//     const location = req.query.location;
//     res.send(`The user id is: ${userId}, location:${location}`);

// });

user.get(":second/education/:education/address/:address/:country", (req,res) => {

    const id= req.params.id;
    const education = req.params.education;
    const address = req.params.address;
    const country = req.params.country;
    const section = req.query.section;
    res.send(`The user id is: ${id}, education:${education}, address:${address}, country:${country}, section:${section}`
    );
    
});

user.get('/try-catch', (req,res) => {
    try {
        const data =FileSystem.readFileSync(`${__dirname}/data.json`, "utf-8");
        const jsonData = JSON.parse(data);
        res.send(jsonData);
        } catch (error) {
            res.status(500).send("Error reading file" );
        }
})

module.exports= user;