// Import express framework
const express = require('express');
// calling an router
const router = express.Router();

// post function for Projects Employee

router.post("/data", (req, res) => {
    console.log(req.body)
    connection.query("call saveRegister(?,?,?,?,?)", [req.body.pickup, req.body.drop, req.body.pickuptime, req.body.phone, req.body.numberOfday], (error, results, fields) => {
        if (!error) {
            res.status(200).json(results)
        } else {
            res.status(400).json("Failed To Get An Data" + error)
        }
    })
})

// update the register

router.post("/updateregister", (req, res) => {
    console.log(req.body)
    connection.query("call updateRegister(?,?)", [req.body.ID,req.body.status], (error, results, fields) => {
        if (!error) {
            res.status(200).json(results)
        } else {
            res.status(400).json("Failed To Get An Data" + error)
        }
    })
})

router.get("/getdata", (req, res) => {
   
    connection.query("call getData()", [], (error, results, fields) => {
        if (!error) {
            res.status(200).json(results[0])
        } else {
            res.status(400).json("Failed To Get An Data" + error)
        }
    })
})

// quick book
router.post("/quickbook", (req, res) => {

    connection.query("call quickBook(?)", [req.body.contactNumber], (error, results, fields) => {
        if (!error) {
            res.status(200).json(results)
        } else {
            res.status(400).json("Failed To Get An Data" + error)
        }
    })
})

router.get("/quickbookview", (req, res) => {
   
    connection.query("call quickbookview()", [], (error, results, fields) => {
        if (!error) {
            res.status(200).json(results[0])
        } else {
            res.status(400).json("Failed To Get An Data" + error)
        }
    })
})


router.post("/quickupdate", (req, res) => {

    connection.query("call quickbookupdate(?)", [req.body.ID], (error, results, fields) => {
        if (!error) {
            res.status(200).json(results)
        } else {
            res.status(400).json("Failed To Get An Data" + error)
        }
    })
})

// exporting the module
module.exports = router;