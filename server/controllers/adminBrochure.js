'use strict'
const db = require("../models/database")
const ip = require('request-ip')
const fs = require('fs')

//브로슈어 리스트
exports.getBrochureList = async (req, res) => {
    try {

        let inSql = ""
        if (req.query.search) {
            if (req.query.field === "ALL") {
                inSql = `AND (BROCHURE_TITLE LIKE '%${req.query.search}%' OR BROCHURE_CONTENTS LIKE '%${req.query.search}%')`
            } else {
                inSql = `AND ${req.query.field} LIKE %${req.query.search}%`
            }
        }

        let sql = `SELECT 
                   BROCHURE_FILE_PATH as file, BROCHURE_FILE_NAME as fileName, BROCHURE_TITLE as title, BROCHURE_REG_DATE as time, SEQ as seq
                   FROM TBL_WITH_BROCHURE 
                   WHERE BROCHURE_DEL_YN = 'Y' 
                   ${inSql}
                   ORDER BY SEQ DESC`
        
        let [brochureList] = await db.query(sql)
        let rowNum = brochureList.length
        brochureList.forEach(x => {x.num = rowNum; x.time = x.time.toLocaleString(); rowNum--})
        res.status(200).json({result : brochureList})

    } catch (err) {
        console.log(err)
        res.status(400).json({result : 400})
    }
}

// 브로슈어 상세보기
exports.getBrochureDetail = async (req, res) => {
    try {

        let sql = `SELECT 
                   BROCHURE_TITLE as title, BROCHURE_CONTENTS as contents, BROCHURE_FILE_PATH as file, BROCHURE_FILE_NAME as fileName, BROCHURE_REG_DATE as time
                   FROM TBL_WITH_BROCHURE
                   WHERE BROCHURE_DEL_YN = 'Y' AND SEQ = ${req.query.seq}`

        let [BrochureDetail] = await db.query(sql)
        BrochureDetail[0].time = BrochureDetail[0].time.toLocaleString();
        res.status(200).json({result : [BrochureDetail[0]]})

    } catch (err) {
        console.log(err)
        res.status(400).json({result : 400})
    }
}

// 브로슈어 업로드
exports.addBrochureForm = async (req, res) => {
    try {

        const data = req.body

        let sql = `INSERT INTO TBL_WITH_BROCHURE
                  (BROCHURE_TITLE, BROCHURE_CONTENTS, BROCHURE_FILE_PATH, BROCHURE_FILE_NAME, BROCHURE_REG_IP, BROCHURE_DEL_YN) 
                  VALUES(?,?,?,?,?,?)`

        // 파일O
        if (req.files) {

            const tempPath = Date.now()+'_'+data.fileName
            const path = `/brochure/${tempPath}`
            req.files.file.mv(`./server/assets${path}`)

            await db.query(sql, [data.title, data.contents, path, data.fileName, ip.getClientIp(req), 'Y'])
            res.status(200).json({ result : 200 })
        // 파일X
        } else {

            await db.query(sql, [data.title, data.contents, null, null, ip.getClientIp(req), 'Y'])
            res.status(200).json({ result : 200 })

        }

    } catch (err) {
        console.log(err)
        res.status(400).json({ result : 400 })
    }
}  

// 브로슈어 업데이트
exports.updateBrochureForm = async (req, res) => {
    try {
        const data = req.body
        // 파일O
        if (req.files) {
            // 기존 파일 삭제
            let [getfile] = await db.query(`SELECT BROCHURE_FILE_PATH as path FROM TBL_WITH_BROCHURE WHERE SEQ =${req.query.seq}`)
            await fs.unlink(`./server/assets${getfile[0].path}`,(err)=> {if (err) console.log(err)})

            // 파일 경로 설정 및 이동
            const tempPath = Date.now()+'_'+ data.fileName
            const path = `/brochure/${tempPath}`
            req.files.file.mv(`./server/assets${path}`)

            let sql = `UPDATE TBL_WITH_BROCHURE
                       SET BROCHURE_TITLE = ?, BROCHURE_CONTENTS=?, BROCHURE_FILE_PATH=?, BROCHURE_FILE_NAME=?, BROCHURE_REG_IP =? 
                       WHERE SEQ = ${req.query.seq}`

            await db.query(sql, [data.title, data.contents, path, data.fileName, ip.getClientIp(req)])
            res.status(200).json({ result : 200 })

        // 파일X
        } else {

            let sql = `UPDATE TBL_WITH_BROCHURE
                       SET BROCHURE_TITLE = ?, BROCHURE_CONTENTS=?, BROCHURE_REG_IP =? 
                       WHERE SEQ = ${req.query.seq}`
            await db.query(sql, [data.title, data.contents, ip.getClientIp(req)])
            res.status(200).json({ result : 200 })
        }

    } catch (err) {
        console.log(err)
        res.status(400).json({ result: 400 })
    }
}

// 브로슈어 삭제
exports.deleteBrochureForm = async (req, res) => {
    try {

        let sql = `UPDATE TBL_WITH_BROCHURE SET BROCHURE_DEL_YN = 'N' WHERE SEQ = ?`

        await db.query(sql, [req.query.seq])
        res.status(200).json({result : 200})
        
    } catch (err) {
        console.log(err)
        res.status(400).json({result : 400})
    }
}
