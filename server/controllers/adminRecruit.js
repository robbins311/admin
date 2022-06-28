'use strict'
const db = require("../models/database")
const ip = require('request-ip')
const fs = require('fs')

// 채용공고 리스트
exports.getRecruitList = async (req, res) => {
    try {

        let inSql = ""  
        let location = ""
        if (req.query.search) {
                inSql = `AND RECRUIT_TITLE LIKE %${req.query.search}%` 
        }

        if (req.query.location == "main") {
            location = "AND RECRUIT_LOC = '본사'"
        } else if (req.query.location == "branch"){
            location = "AND RECRUIT_LOC NOT IN ('본사')"
        }

        let sql = `SELECT 
                   SEQ as seq, RECRUIT_TYPE as type, RECRUIT_TITLE as title, RECRUIT_LOC as location, RECRUIT_FILE_PATH as file, RECRUIT_FILE_NAME as fileName,
                   CONCAT(RECRUIT_START_DATE, " ~ ", RECRUIT_END_DATE) as date, RECRUIT_REG_DATE as time, RECRUIT_END_DATE as endDate
                   FROM TBL_WITH_RECRUIT 
                   WHERE RECRUIT_DEL_YN = 'Y' 
                   ${inSql}
                   ${location}
                   ORDER BY SEQ DESC`
        
        let [RecruitList] = await db.query(sql)
        let rowNum = RecruitList.length
        RecruitList.forEach(x => {x.num = rowNum; x.time = x.time.toLocaleString(); rowNum--})
        res.status(200).json({result : RecruitList})

    } catch (err) {
        console.log(err)
        res.status(400).json({result : 400})
    }
}

/// 채용공고 상세보기
exports.getRecruitDetail = async (req, res) => {
    try {

        let sql = `SELECT 
                   RECRUIT_TITLE as title, RECRUIT_CONTENTS as contents, RECRUIT_LOC as location, 
                   RECRUIT_TYPE as type, RECRUIT_FILE_PATH as file, RECRUIT_FILE_NAME as fileName, 
                   CONCAT(RECRUIT_START_DATE, " ~ ", RECRUIT_END_DATE) as date, RECRUIT_REG_DATE as time, RECRUIT_END_DATE as endDate
                   FROM TBL_WITH_RECRUIT
                   WHERE RECRUIT_DEL_YN = 'Y' AND SEQ = ${req.query.seq}`

        let [recruitDetail] = await db.query(sql)
        recruitDetail[0].time = recruitDetail[0].time.toLocaleString();
        res.status(200).json({result : recruitDetail})

    } catch (err) {
        console.log(err)
        res.status(400).json({result : 400})
    }
}

/// 채용공고 업로드
exports.addRecruitForm = async (req, res) => {
    try {

        const data = req.body

        let sql = `INSERT INTO TBL_WITH_RECRUIT
                  (RECRUIT_TITLE, RECRUIT_LOC, RECRUIT_TYPE, RECRUIT_START_DATE, RECRUIT_END_DATE, 
                   RECRUIT_CONTENTS, RECRUIT_FILE_PATH, RECRUIT_FILE_NAME, RECRUIT_REG_IP) 
                   VALUES(?,?,?,?,?,?,?,?,?)`

        const tempPath = Date.now()+'_'+ data.fileName
        const path = `/recruit/${tempPath}`
        req.files.file.mv(`./server/assets${path}`)

        await db.query(sql, [data.title, data.location, data.type, data.start, data.end, data.contents, path, data.fileName, ip.getClientIp(req)])
        res.status(200).json({ result : 200 })
     

    } catch (err) {
        console.log(err)
        res.status(400).json({ result : err })
    }
}  

/// 채용공고 업데이트
exports.updateRecruitForm = async (req, res) => {
    try {

        const data = req.body
        // 파일 O
        if (req.files) {
            // 기존 파일 삭제
            let [getfile] = await db.query(`SELECT RECRUIT_FILE_PATH as path FROM TBL_WITH_RECRUIT WHERE SEQ =${req.query.seq}`)
            fs.unlink(`./server/assets${getfile[0].path}`,(err)=> {if (err) console.log(err)})
            // 파일 경로 설정 및 이동
            const tempPath = Date.now()+'_'+ data.fileName
            const path = `/recruit/${tempPath}`
            req.files.file.mv(`./server/assets${path}`)

            let sql = `UPDATE TBL_WITH_RECRUIT
                       SET RECRUIT_TITLE = ?, RECRUIT_LOC =?, RECRUIT_TYPE =?, RECRUIT_START_DATE =?, RECRUIT_END_DATE =?, 
                       RECRUIT_CONTENTS=?, RECRUIT_FILE_PATH=?, RECRUIT_FILE_NAME=?, RECRUIT_REG_IP =? 
                       WHERE SEQ = ${req.query.seq}`

            await db.query(sql, [data.title, data.location, data.type, data.start, data.end, data.contents, path, data.fileName, ip.getClientIp(req)])
            res.status(200).json({ result : 200 })
        // 파일 X
        } else {

            let sql = `UPDATE TBL_WITH_RECRUIT
                       SET RECRUIT_TITLE = ?, RECRUIT_LOC =?, RECRUIT_TYPE =?, RECRUIT_START_DATE =?, RECRUIT_END_DATE =?, 
                       RECRUIT_CONTENTS=?, RECRUIT_REG_IP =? 
                       WHERE SEQ = ${req.query.seq}`

            await db.query(sql, [data.title, data.location, data.type, data.start, data.end, data.contents, ip.getClientIp(req)])
            res.status(200).json({ result : 200 })
        }
    } catch (err) {
        console.log(err)
        res.status(400).json({ result: 400 })
    }
}

/// 채용공고 삭제
exports.deleteRecruitForm = async (req, res) => {
    try {

        let sql = `UPDATE TBL_WITH_RECRUIT SET RECRUIT_DEL_YN = 'N' WHERE SEQ = ?`

        await db.query(sql, [req.query.seq])
        res.status(200).json({result : 200})
        
    } catch (err) {
        console.log(err)
        res.status(400).json({result : 400})
    }
}
