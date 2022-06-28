'use strict'
const db = require("../models/database")
const ip = require('request-ip')
const fs = require('fs')

//업데이트 리스트
exports.getUpdateList = async (req, res) => {
    try {

        let inSql = ""
        if (req.query.search) {
            if (req.query.field === "ALL") {
                inSql = `AND (UPDATE_TITLE LIKE '%${req.query.search}%' OR UPDATE_CONTENTS LIKE '%${req.query.search}%')`
            } else {
                inSql = `AND ${req.query.field} LIKE %${req.query.search}%`
            }
        }

        let sql = `SELECT 
                   UPDATE_FILE_PATH as file, UPDATE_FILE_NAME as fileName, UPDATE_TITLE as title, UPDATE_REG_DATE as time, SEQ as seq
                   FROM TBL_WITH_UPDATE 
                   WHERE UPDATE_DEL_YN = 'Y' 
                   ${inSql}
                   ORDER BY SEQ DESC`
        
        let [updateList] = await db.query(sql)
        let rowNum = updateList.length
        updateList.forEach(x => {x.num = rowNum; x.time = x.time.toLocaleString(); rowNum--})
        res.status(200).json({result : updateList})

    } catch (err) {
        console.log(err)
        res.status(400).json({result : err})
    }
}

// 업데이트 상세보기
exports.getUpdateDetail = async (req, res) => {
    try {

        let sql = `SELECT 
                   UPDATE_TITLE as title, UPDATE_CONTENTS as contents, UPDATE_FILE_PATH as file, UPDATE_FILE_NAME as fileName, UPDATE_REG_DATE as time 
                   FROM TBL_WITH_UPDATE
                   WHERE UPDATE_DEL_YN = 'Y' AND SEQ = ${req.query.seq}`

        let [updateDetail] = await db.query(sql)
        updateDetail[0].time = updateDetail[0].time.toLocaleString();
        res.status(200).json({result : updateDetail})

    } catch (err) {
        console.log(err)
        res.status(400).json({result : err})
    }
}

// 업데이트 업로드
exports.addUpdateForm = async (req, res) => {
    try {

        const data = req.body

        let sql = `INSERT INTO TBL_WITH_UPDATE
                  (UPDATE_TITLE, UPDATE_CONTENTS, UPDATE_FILE_PATH, UPDATE_FILE_NAME, UPDATE_REG_IP, UPDATE_DEL_YN) 
                  VALUES(?,?,?,?,?,?)`

        // 파일O
        if (req.files) {

            const tempPath = Date.now()+'_'+ data.fileName
            const path = `/update/${tempPath}`
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

// 업데이트 업데이트
exports.updateUpdateForm = async (req, res) => {
    try {

        const data = req.body
        // 파일O
        if (req.files) {

            let [getfile] = await db.query(`SELECT UPDATE_FILE_PATH as path FROM TBL_WITH_UPDATE WHERE SEQ =${req.query.seq}`)
            await fs.unlink(`./server/assets${getfile[0].path}`,(err)=> {if (err) console.log(err)})

            const tempPath = Date.now()+'_'+ data.fileName
            const path = `/update/${tempPath}`
            req.files.file.mv(`./server/assets${path}`)
            
            let sql = `UPDATE TBL_WITH_UPDATE
                       SET UPDATE_TITLE = ?, UPDATE_CONTENTS=?, UPDATE_FILE_PATH=?, UPDATE_FILE_NAME=?, UPDATE_REG_IP =?
                       WHERE SEQ = ${req.query.seq}`
            await db.query(sql, [data.title, data.contents, path, data.fileName, ip.getClientIp(req)])
            
            res.status(200).json({ result : 200 })

        // 파일X
        } else {

            let sql = `UPDATE TBL_WITH_UPDATE
                       SET UPDATE_TITLE = ?, UPDATE_CONTENTS=?, UPDATE_REG_IP =?
                       WHERE SEQ = ${req.query.seq}`

            await db.query(sql, [data.title, data.contents, ip.getClientIp(req)])
            res.status(200).json({ result : 200 })
        }

    } catch (err) {
        console.log(err)
        res.status(400).json({ result: err })
    }
}

// 업데이트 삭제
exports.deleteUpdateForm = async (req, res) => {
    try {

        let sql = `UPDATE TBL_WITH_UPDATE SET UPDATE_DEL_YN = 'N' WHERE SEQ = ?`

        await db.query(sql, [req.query.seq])
        res.status(200).json({result : 200})
        
    } catch (err) {
        console.log(err)
        res.status(400).json({result : err})
    }
}
