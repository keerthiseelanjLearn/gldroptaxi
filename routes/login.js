// Import express framework
const express = require('express');
// calling an router
const router = express.Router();
const jwt = require('jsonwebtoken');
const checkAuth = require('../middleware/check-auth')

// get function for Projects Employee
router.post("/test", (req, res) => {
    
    connection.query("call getLogin(?,?)", [req.body.username,req.body.password], (error, results, fields) => {
        if (!error) {
        const token =    jwt.sign({
                username:req.body.username,
                password:req.body.password
            },
            "keerthi",
            {
                expiresIn:"1h"
            }
            );
            res.status(200).json({result: results[0],tokens: token})
        } else {
            res.status(400).json("Failed To Get An Data" + error)
        }
    }
    )
}
)

router.post("/user", (req, res) => {
    
    connection.query("call getLogin(?,?)", [req.body.username,req.body.password], (error, results, fields) => {
        if (!error) {
            res.status(200).json( results[0])
        } else {
            res.status(400).json("Failed To Get An Data" + error)
        }
    }
    )
}
)

// exporting the module
module.exports = router;