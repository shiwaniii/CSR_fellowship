const express = require("express");
const router = express.Router();


router.get("/", (req,res) => {
   

    res.send(`This is static route.`);
});

router.get("/:id", (req,res) => {
    const userId = req.params.id;
    res.send(`{This is example of dynamic route Hello User ${userId}`);

});

router.get("/:id", (req,res) => {
    const userId = req.params.id;
    const location = req.query.location;
    res.send(`The user id is: ${userId}, location:${location}`);

});

router.get(":second/education/:education/address/:address/:country", (req,res) => {

    const id= req.params.id;
    const education = req.params.education;
    const address = req.params.address;
    const country = req.params.country;
    const section = req.query.section;
    res.send(`The user id is: ${id}, education:${education}, address:${address}, country:${country}, section:${section}`
    );
    
});


module.exports= router;