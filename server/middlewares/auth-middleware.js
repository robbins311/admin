const jwt = require('jsonwebtoken');
const db = require("../models/database");

module.exports = async (req, res, next) => {
    const { authorization } = req.headers;
    console.log(req.headers)
    console.log(req.body)
    console.log(authorization)
    console.log(req.query)
    if (authorization == 'null') {
        res.status(401).send({result : 'fail'});
        return
    }

    try {

        let userId = ''
        jwt.verify(authorization, process.env.ACCESS_SECRET_KEY, (err, value) => {
            if (err && err.message == "jwt expired") {
                res.status(401).send({ result : 'expired'}) 
            } else if (value) {
                userId = value.userId
            } else {
                res.status(401).send({ result : 'fail'})
            }
        })
         
        const [user] = await db.query(`SELECT ADMIN_ID FROM TBL_WITH_ADMIN WHERE ADMIN_ID = '${userId}'`)
        console.log(user)
        if (user.length !== 0) next();   
        

    } catch (err) {
        console.log(err)
        res.status(401).send({ result : 'fail'});
        return
    }
};