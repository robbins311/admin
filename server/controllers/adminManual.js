'use strict'
const db = require("../models/database")
const ip = require('request-ip')
const fs = require('fs')


//메뉴얼 리스트
exports.getManualList = async (req, res) => {
    try {

        let inSql = ""
        if (req.query.search) {
            if (req.query.field === "ALL") {
                inSql = `AND (MANUAL_TITLE LIKE '%${req.query.search}%' OR MANUAL_CONTENTS LIKE '%${req.query.search}%')`
            } else {
                inSql = `AND ${req.query.field} LIKE %${req.query.search}%`
            }
        }

        let sql = `SELECT 
                   MANUAL_FILE_PATH as file, MANUAL_FILE_NAME as fileName, MANUAL_TITLE as title, MANUAL_REG_DATE as time, SEQ as seq
                   FROM TBL_WITH_MANUAL 
                   WHERE MANUAL_DEL_YN = 'Y' 
                   ${inSql}
                   ORDER BY SEQ DESC`
        
        let [manualList] = await db.query(sql)
        let rowNum = manualList.length
        manualList.forEach(x => {x.num = rowNum; x.time = x.time.toLocaleString(); rowNum--})
        res.status(200).json({result : manualList})

    } catch (err) {
        console.log(err)
        res.status(400).json({result : err})
    }
}

// 메뉴얼 상세보기
exports.getManualDetail = async (req, res) => {
    try {

        let sql = `SELECT 
                   MANUAL_TITLE as title, MANUAL_CONTENTS as contents, MANUAL_FILE_PATH as file, MANUAL_FILE_NAME as fileName, MANUAL_REG_DATE as time 
                   FROM TBL_WITH_MANUAL
                   WHERE MANUAL_DEL_YN = 'Y' AND SEQ = ${req.query.seq}`

        let [manualDetail] = await db.query(sql)
        manualDetail[0].time = manualDetail[0].time.toLocaleString();
        res.status(200).json({result : manualDetail})

    } catch (err) {
        console.log(err)
        res.status(400).json({result : err})
    }
}

// 메뉴얼 업로드
exports.addManualForm = async (req, res) => {
    try {

        const data = req.body

        let sql = `INSERT INTO TBL_WITH_MANUAL
                  (MANUAL_TITLE, MANUAL_CONTENTS, MANUAL_FILE_PATH, MANUAL_FILE_NAME, MANUAL_REG_IP, MANUAL_DEL_YN) 
                  VALUES(?,?,?,?,?,?)`

        // 파일O
        if (req.files) {

            const tempPath = Date.now()+'_'+ data.fileName
            const path = `/manual/${tempPath}`
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
        res.status(400).json({ result : err })
    }
}  

// 메뉴얼 업데이트
exports.updateManualForm = async (req, res) => {
    try {

        const data = req.body

        // 파일O
        if (req.files) {

             // 기존 파일 삭제
             let [getfile] = await db.query(`SELECT MANUAL_FILE_PATH as path FROM TBL_WITH_MANUAL WHERE SEQ =${req.query.seq}`)
             await fs.unlink(`./server/assets${getfile[0].path}`,(err)=> {if (err) console.log(err)})

            const tempPath = Date.now()+'_'+ data.fileName
            const path = `/manual/${tempPath}`
            req.files.file.mv(`./server/assets${path}`)

            let sql = `UPDATE TBL_WITH_MANUAL
                       SET MANUAL_TITLE = ?, MANUAL_CONTENTS=?, MANUAL_FILE_PATH=?, MANUAL_FILE_NAME=?, MANUAL_REG_IP =? 
                       WHERE SEQ = ${req.query.seq}`
            await db.query(sql, [data.title, data.contents, path, data.fileName, ip.getClientIp(req)])
            
            res.status(200).json({ result : 200 })

        // 파일X
        } else {

            let sql = `UPDATE TBL_WITH_MANUAL
                       SET MANUAL_TITLE = ?, MANUAL_CONTENTS=?, MANUAL_REG_IP =? 
                       WHERE SEQ = ${req.query.seq}`          
            await db.query(sql, [data.title, data.contents, ip.getClientIp(req)])
            
            res.status(200).json({ result : 200 })
        }

    } catch (err) {
        console.log(err)
        res.status(400).json({ result: err })
    }
}

// 메뉴얼 삭제
exports.deleteManualForm = async (req, res) => {
    try {

        let sql = `UPDATE TBL_WITH_MANUAL SET MANUAL_DEL_YN = 'N' WHERE SEQ = ?`

        await db.query(sql, [req.query.seq])
        res.status(200).json({result : 200})
        
    } catch (err) {
        console.log(err)
        res.status(400).json({result : err})
    }
}
