const express = require("express")
const app = express();

app.get("/users", (req,res) => {
    res.send("Hello, sansar");

});

app.listen(3000, () => {
    console.log("Express app is running at port 3000");
});