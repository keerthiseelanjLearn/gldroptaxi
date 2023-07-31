const jwt = require('jsonwebtoken')
module.exports = (req,res,next)=>{
    try {
        const headerToken = req.headers.authorization.split(" ")[1];
        const decode = jwt.verify(headerToken, "keerthi");
        req.userData = decode;
        next();
    } catch (error) {
        res.status(401).json({
            message:'auth faild'
        })
    }

}