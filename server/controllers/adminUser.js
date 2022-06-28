'use strict'
const db = require("../models/database");
const crypto = require("crypto");
const jwt = require('jsonwebtoken');

// Salt 만들기
const makeSalt = async () => {
    const buf = await crypto.randomBytes(32)
    const salt = buf.toString('base64')
    return salt
}

// 회원가입
exports.addUser = async (req, res) => {
    try {
        
        const [existId] = await db.query(`SELECT * FROM TBL_WITH_ADMIN WHERE ADMIN_ID = '${req.body.id}'`)
        
        if (existId.length !== 0) {
            res.status(400).send('이미 존재하는 아이디입니다')

        } else {
            const theSalt = await makeSalt()
            const encodPass = crypto.createHmac('sha256', theSalt)
                                    .update(req.body.password)
                                    .digest('base64')
        
            const sql = `INSERT INTO TBL_WITH_ADMIN(ADMIN_ID, ADMIN_PASS, ADMIN_SALT) VALUES(?,?,?)`
            await db.query(sql, [req.body.id, encodPass, theSalt])

            res.status(400).json({result : 200})

        }

    } catch (err) {
        console.log(err)
        res.status(400).send({result : 'fail'})
    }
}

// 로그인
exports.checkUser = async (req, res) => {
    try {
        
        const typedId = req.body.id
        const [dbUser] = await db.query(`SELECT * FROM TBL_WITH_ADMIN WHERE ADMIN_ID = '${typedId}'`)
        console.log(dbUser[0])
        const encodPass = crypto.createHmac('sha256', dbUser[0].ADMIN_SALT)
                                .update(req.body.password)
                                .digest('base64')

        // 아이디, 비밀번호 확인
        if ( dbUser[0].ADMIN_PASS == encodPass ) {

            const access = await jwt.sign({ userId : dbUser[0].ADMIN_ID}, process.env.ACCESS_SECRET_KEY, {expiresIn : 60*60*3})
            const refresh = await jwt.sign({}, process.env.REFRESH_SECRET_KEY, {expiresIn : 60*60*12})

            await db.query('INSERT INTO TBL_WITH_TOKEN(TOKEN_USER, TOKEN_ACCESS, TOKEN_REFRESH) VALUES(?,?,?)', [typedId, access, refresh])

            res.status(200).json({ access, refresh , result : 200})

        // 확인 실패
        } else {
            res.status(400).send({ result : "fail"})
        }

    } catch (err) {
        console.log(err)
        res.status(400).send({result : "fail"})
    }
}

// ACCESS TOKEN 재발급 및 로그아웃
exports.refreshUser = async (req, res) => {
    try {
        const refresh = req.body.refresh
        console.log(refresh)
        const access = req.body.access
        console.log(access)

        const accessDecode = jwt.decode(access, process.env.ACCESS_SECRET_KEY)

        jwt.verify(refresh, process.env.REFRESH_SECRET_KEY, async (err, value) => {
            if (err) {

                db.query(`DELETE FROM TBL_WITH_TOKEN WHERE TOKEN_USER = ? AND TOKEN_ACCESS = ? AND TOKEN_REFRESH = ?`,[accessDecode.userId, access, refresh])
                res.status(401).send({ result : 'expired'}) 

            } else {

                const sql = `SELECT TOKEN_USER, SEQ FROM TBL_WITH_TOKEN
                             WHERE TOKEN_USER = ? AND TOKEN_ACCESS = ? AND TOKEN_REFRESH = ?`
                const [compare] = await db.query(sql, [accessDecode.userId, access, refresh])     

                if (compare.length != 0) {
                
                    const newAccess = await jwt.sign({ userId : compare[0].TOKEN_USER}, process.env.ACCESS_SECRET_KEY, {expiresIn : 60*60*3})
                    await db.query(`UPDATE TBL_WITH_TOKEN SET TOKEN_ACCESS = ? WHERE SEQ = ?`,[newAccess, compare[0].SEQ])
                    res.status(200).json({ token : newAccess, result : 200})

                }
            }
        })

        
    } catch (err) {
        console.log(err)
        res.status(400).json({ result : 400})
    }
}

