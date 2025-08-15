const express = require("express");
const router = express.Router();
const mysql = require("mysql2");
const connection = mysql.createConnection({
    host: "localhost",
    user:"root",
    password:"root@123!",
    database:"fellow",
    port:3307,
});

connection.connect((err) => {
    if(err) {
        console.log("Error connecting to MySQL", err);
    }else{
        console.log("Connected to MySQL");
    }
});


// router.get("/", (req, res) => {
// res.send("This ia a college route");
// });

// router.get("/details/:id",(req,res)=>{
//   const collegeID = req.params.id;
//       connection.query(`SELECT * FROM colleges WHERE id=${collegeID}`, (err, results) => {
//   if (err) {
//     console.log("error quering the colleges", err);
//   } else {
//     console.log("Colleges data", results);
//     res.send(results);
//   }
// });

router.get("/conection/:name",async(req,res)=>{
  const CollegeName = req.params.name;
  const result =await new Promise ((resolve, reject) => { 
      connection.query(`SELECT * FROM colleges WHERE name="${CollegeName}"`, (err, results) => 
  {
  if (err) reject(err);
    resolve(results);
  
  }
);
});
res.send(result);
});


router.post("/create", async (req, res) => {
  const collegeName = req.body.name;
  const collegeAddress = req.body.address;

  if (!collegeName && !collegeAddress) {
    return res.status(400).send({ data: "Name and address are required" });
  }
  const result = await new Promise((resolve, reject) => {
    connection.query(
      `INSERT INTO colleges (name,address) VALUES('${collegeName}','${collegeAddress}')`,
      (err, data) => {
        if (err) {
          console.log("Error creating college", err);
          reject(`Something went wrong`, err.message);
        } else {
          console.log(" College created successfully", data);
          resolve( `${data.affectedRows} row(s)created with id ${data.insertId})`
          );
        }
      }
    );
  });
  res.send({ message: result, data: req.body });
});

module.exports = router;
//   connection.query(
//     `SELECT * FROM colleges WHERE name="${collegename}"`,
//     (err, results) => {
//       if (err) {
//         console.log("error quering the colleges", err);
//       } else {
//         console.log("Colleges data", results);
//         res.send(results);
//       }
//     }
//   );

router.put("/update/:id", async (req, res) => {
  const collegeId = req.params.id;
  const collegeName = req.body.name;
  const collegeAddress = req.body.address;
  if (!collegeName || !collegeAddress) {
    return res.status(400).send({ data: "Name and address are required" });
  }
  const result = await new Promise((resolve, reject) => {
    connection.query(
      `UPDATE colleges SET name ="${collegeName}", address="${collegeAddress}" WHERE id="${collegeId}"`,
      (err, data) => {
        if (err) {
          console.log("Error uploading college", err);
          reject(`Something went wrong`, err.message);
        } else {
          console.log(" College updated successfully", data);
          resolve(
            `${data.affectedRows} row(s)created with id ${data.insertId})`
          );
        }
      }
    );
  });
  res.send({ message: result, data: req.body });
});

router.delete("/delete/:id", async (req, res) => {
  const collegeId = req.params.id;
  if (!collegeId) {
    return res.status(400).send({ data: "College id is required" });
  }
  const result = await new Promise((resolve, reject) => {
    connection.query(
      `DELETE from colleges where id ="${collegeId}"`, 
      (err, data) => {
        if (err) {
          console.log("Error deleting college", err);
          reject(`Something went wrong`, err.message);
        } else {
          console.log(" College deleted successfully", data);
          resolve(
            `${data.affectedRows} row(s)created with id ${data.insertId})`
          );
        }
      }
    );
  });
  res.send({ message: result, data: req.body });
});
 
module.exports= router;

