'use strict'
const db = require("../models/database")
const ip = require('request-ip')
const iconv = require('iconv-lite')


//제품문의 리스트
exports.getQuestionList = async (req, res) => {
    try {

        let inSql = ""

        if (req.query.search) {
            inSql = `AND (QUESTION_COMPANY LIKE '%${req.query.search}%' 
                       OR QUESTION_MANAGER LIKE '%${req.query.search}%'
                       OR QUESTION_EMAIL LIKE '%${req.query.search}%'
                       OR QUESTION_TEL LIKE '%${req.query.search}%'
                       OR QUESTION_LOCATION LIKE '%${req.query.search}%'
                       OR QUESTION_TEXT LIKE '%${req.query.search}%')`
        }

        let sql = `SELECT 
                   QUESTION_COMPANY as company, QUESTION_MANAGER as manager, QUESTION_EMAIL as email, QUESTION_TEL as tel, QUESTION_LOCATION as location, 
                   QUESTION_TEXT as contents, QUESTION_PERSONAL_YN as personal, QUESTION_NEWS_YN as newsletter, QUESTION_REG_DATE as time, SEQ as seq
                   FROM TBL_WITH_QUESTION
                   WHERE QUESTION_DEL_YN = 'Y' 
                   ${inSql}
                   ORDER BY SEQ DESC`
        
        let [question] = await db.query(sql)
        let rowNum = question.length
        question.forEach(x => {x.num = rowNum; x.time = x.time.toLocaleString(); rowNum--})
        res.status(200).json({result : question})

    } catch (err) {
        console.log(err)
        res.status(400).json({result : err})
    }
}

//제품문의 상세보기
exports.getQuestionDetail = async (req, res) => {
    try {

        let sql = `SELECT 
                   QUESTION_COMPANY as company, QUESTION_MANAGER as manager, QUESTION_EMAIL as email, QUESTION_TEL as tel, QUESTION_LOCATION as location, 
                   QUESTION_TEXT as contents, QUESTION_PERSONAL_YN as personal, QUESTION_NEWS_YN as newsletter, QUESTION_REG_DATE as time, SEQ as seq
                   FROM TBL_WITH_QUESTION
                   WHERE SEQ=${req.query.seq}`
        
        let [question] = await db.query(sql)
        question.forEach(x => {x.time = x.time.toLocaleString()})
        res.status(200).json({result : question})

    } catch (err) {
        console.log(err)
        res.status(400).json({result : err})
    }
}

// 제품문의 업로드
exports.addQuestionForm = async (req, res) => {
    try {

        const data = req.body
        console.log(data)

        let sql = `INSERT INTO TBL_WITH_QUESTION
                  (QUESTION_COMPANY, QUESTION_MANAGER, QUESTION_EMAIL, QUESTION_TEL, QUESTION_LOCATION, 
                   QUESTION_TEXT, QUESTION_PERSONAL_YN, QUESTION_NEWS_YN, QUESTION_DEL_YN) 
                  VALUES(?,?,?,?,?,?,?,?,?)`

        await db.query(sql, [data.company, data.manager, data.email, data.tel, data.location, 
                             data.contents, data.personal, data.newsletter, 'Y'])

        res.status(200).json({ result : 200 })

    } catch (err) {
        console.log(err)
        res.status(400).json({ result : err })
    }
}  

// 제품문의 삭제
exports.deleteQuestionForm = async (req, res) => {
    try {

        let sql = `UPDATE TBL_WITH_QUESTION SET QUESTION_DEL_YN = 'N' WHERE SEQ = ?`

        await db.query(sql, [req.query.seq])
        res.status(200).json({result : 200})
        
    } catch (err) {
        console.log(err)
        res.status(400).json({result : err})
    }
}
