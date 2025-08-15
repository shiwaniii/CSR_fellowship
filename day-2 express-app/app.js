const express= require("express");
const useRouter = require("./user")
const app = express();

app.use(express.json());
app.use(express.urlencoded({etended: true}) );

app.get("/",(req ,res)=>{
    console.log("Hello World!");// appears in console
    res.send("response to Wordlink Class 192.168.1.122:3000");// appears in browser
    // res.render(<!DOCTYPE html>)

});



app.use("/all",require("./route"));
app.use("/user", useRouter);
app.use("/college",require("./college"));
    
app.listen(3000, () => {
    console.log("Express app is running on port 3000");
});
// const mysql = require("mysql2");
// const connection = mysql.createConnection({
//     host: "localhost",
//     user:"root",
//     password:"root@123!",
//     database:"fellow",
//     port:3307,
// });

// connection.connect((err) => {
//     if(err) {
//         console.log("Error connecting to MySQL", err);
//     }else{
//         console.log("Connected to MySQL");
//     }
// });

// connection.query("SELECT * FROM colleges", (err, results) => {
//   if (err) {
//     console.log("error quering the colleges", err);
//   } else {
//     console.log("Colleges data", results);
//   }
// });

