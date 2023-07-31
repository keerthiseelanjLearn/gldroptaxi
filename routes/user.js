// Import express framework
const express = require('express');
// calling an router
const router = express.Router();

// get function for Projects Employee
router.post("/create", (req, res) => {

    let ack = Math.floor((Math.random() * 900000) + 100000);
    let dob = (req.body.dob).slice(0, 10);

    connection.query("call register(?,?,?,?,?,?,?,?,?,?,?)", 
    [req.body.name,req.body.mobileNumber,req.body.mail,req.body.password,req.body.city,dob
        ,req.body.course,req.body.dept,req.body.sex,req.body.desc,ack], (error, results, fields) => {
        if (!error) {
            res.status(200).json({status:"success"})
        } else {
            console.log(error)
            res.status(400).json("Failed To Get An Data" + error)
        }
    }
    )
}
)

router.get("/get", (req, res) => {

   

    connection.query("call getRegisterData()", 
    [], (error, results, fields) => {
        if (!error) {
            res.status(200).json(results[0])
        } else {
            console.log(error)
            res.status(400).json("Failed To Get An Data" + error)
        }
    }
    )
}
)

// update the user
router.post("/action", (req, res) => {
   connection.query("call registerAction(?,?,?)", 
    [req.body.id,req.body.desc,req.body.status], (error, results, fields) => {
        if (!error) {
            res.status(200).json({status:"success"})
        } else {
            console.log(error)
            res.status(400).json("Failed To Get An Data" + error)
        }
    }
    )
}
)

router.post("/authenticate", (req, res) => {
    connection.query("call authenticate(?,?)", 
     [req.body.pmail,req.body.pass], (error, results, fields) => {
         if (!error) {
             console.log(results)
             res.status(200).json(results[0])
         } else {
             console.log(error)
             res.status(400).json("Failed To Get An Data" + error)
         }
     }
     )
 }
 )
// exporting the module
module.exports = router;