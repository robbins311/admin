'use strict'
const db = require("../models/database")
const ip = require('request-ip')
const fs = require('fs')

//인증 및 수상 리스트
exports.getAwardList = async (req, res) => {
    try {

        let inSql = ""
        if (req.query.search) {
                inSql = `AND AWARD_TITLE LIKE %${req.query.search}%`
        }

        let sql = `SELECT 
                   AWARD_IMAGE as file, AWARD_TITLE as title, AWARD_REG_DATE as time, SEQ as seq
                   FROM TBL_WITH_AWARD
                   WHERE AWARD_DEL_YN = 'Y' 
                   ${inSql}
                   ORDER BY SEQ DESC`
        
        let [awardList] = await db.query(sql)
        let rowNum = awardList.length
        awardList.forEach(x => {x.num = rowNum; x.time = x.time.toLocaleString(); rowNum--})
        res.status(200).json({result : awardList})

    } catch (err) {
        console.log(err)
        res.status(400).json({result : 400})
    }
}
// 인증 및 수상 상세보기
exports.getAwardDetail = async (req, res) => {
    try {

        let sql = `SELECT 
                   AWARD_TITLE as title, AWARD_IMAGE as file, AWARD_REG_DATE as time, AWARD_FILENAME as fileName
                   FROM TBL_WITH_AWARD
                   WHERE AWARD_DEL_YN = 'Y' AND SEQ = ${req.query.seq}`

        let [awardDetail] = await db.query(sql)
        awardDetail[0].time = awardDetail[0].time.toLocaleString();
        res.status(200).json({result : awardDetail})

    } catch (err) {
        console.log(err)
        res.status(400).json({result : 400})
    }
}
// 인증 및 수상 업로드
exports.addAwardForm = async (req, res) => {
    try {
        
        const data = req.body

        const tempPath = Date.now()+'_'+ data.fileName
        const path = `/award/${tempPath}`
        req.files.file.mv(`./server/assets${path}`)

        let sql = `INSERT INTO TBL_WITH_AWARD
                  (AWARD_TITLE, AWARD_IMAGE, AWARD_REG_IP, AWARD_DEL_YN, AWARD_FILENAME) 
                  VALUES(?,?,?,?,?)`

        await db.query(sql, [data.title, path, ip.getClientIp(req), 'Y', data.fileName])
        res.status(200).json({ result : 200 })

    } catch (err) {
        console.log(err)
        res.status(400).json({ result : 400 })
    }
}  
// 인증 및 수상 업데이트
exports.updateAwardForm = async (req, res) => {
    try {
        const data = req.body
        const seq = req.query.seq
        // 파일 o
        if (req.files != null) {
         
            let [getfile] = await db.query(`SELECT AWARD_IMAGE as path FROM TBL_WITH_NOTICE WHERE SEQ =${seq}`)
            fs.unlink(`./server/assets${getfile[0].path}`,(err)=> {if (err) console.log(err)})

            const tempPath = Date.now()+'_'+ data.fileName
            const path = `/award/${tempPath}`
            req.files.file.mv(`./server/assets${path}`)

            const sql = `UPDATE TBL_WITH_AWARD
                         SET AWARD_TITLE = ?, AWARD_IMAGE=?, AWARD_REG_IP =?, AWARD_FILENAME=?
                         WHERE SEQ = ${seq}`
                    
            await db.query(sql, [data.title, path, ip.getClientIp(req)], data.fileName)
            res.status(200).json({ result : 200 })

        } else {

            const sql = `UPDATE TBL_WITH_AWARD
                         SET AWARD_TITLE = ?, AWARD_REG_IP = ?
                         WHERE SEQ = ${seq}`
            await db.query(sql, [data.title, ip.getClientIp(req)])

            res.status(200).json({ result : 200 })
        }

    } catch (err) {
        console.log(err)
        res.status(400).json({ result: 400 })
    }
}
// 인증 및 수상 삭제
exports.deleteAwardForm = async (req, res) => {
    try {

        let sql = `UPDATE TBL_WITH_AWARD SET AWARD_DEL_YN = 'N' WHERE SEQ = ?`

        await db.query(sql, [req.query.seq])
        res.status(200).json({result : 200})
        
    } catch (err) {
        console.log(err)
        res.status(400).json({result : 400})
    }
}
