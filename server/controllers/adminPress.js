'use strict'
const db = require("../models/database")
const ip = require('request-ip')
const fs = require('fs')

//보도자료 리스트
exports.getPressList = async (req, res) => {
    try {

        let inSql = ""
        if (req.query.search) {
            if (req.query.field === "ALL") {
                inSql = `AND (PRESS_TITLE LIKE '%${req.query.search}%' OR PRESS_CONTENTS LIKE '%${req.query.search}%')`
            } else {
                inSql = `AND ${req.query.field} LIKE %${req.query.search}%`
            }
        }

        let sql = `SELECT 
                   PRESS_THUMBNAIL as file, PRESS_TITLE as title, PRESS_LINK as link, PRESS_REG_DATE as time, SEQ as seq
                   FROM TBL_WITH_PRESS 
                   WHERE PRESS_DEL_YN = 'Y' 
                   ${inSql}
                   ORDER BY SEQ DESC`
        
        let [pressList] = await db.query(sql)
        let rowNum = pressList.length
        pressList.forEach(x => {x.num = rowNum; x.time = x.time.toLocaleString(); rowNum--})
        res.status(200).json({result : pressList})

    } catch (err) {
        console.log(err)
        res.status(400).json({result : 400})
    }
}

//보도자료 상세보기
exports.getPressDetail = async (req, res) => {
    try {

        let sql = `SELECT 
                   PRESS_TITLE as title, PRESS_THUMBNAIL as file, PRESS_LINK as link, PRESS_CONTENTS as contents, PRESS_REG_DATE as time , PRESS_FILENAME as fileName
                   FROM TBL_WITH_PRESS
                   WHERE PRESS_DEL_YN = 'Y' AND SEQ = ${req.query.seq}`

        const [pressDetail] = await db.query(sql)
        pressDetail[0].time = pressDetail[0].time.toLocaleString();
        res.status(200).json({result : pressDetail})

    } catch (err) {
        console.log(err)
        res.status(400).json({result : 400})
    }
}

//보도자료 업로드
exports.addPressForm = async (req, res) => {
    try {

        let sql = `INSERT INTO TBL_WITH_PRESS
                  (PRESS_TITLE, PRESS_THUMBNAIL, PRESS_CONTENTS, PRESS_LINK, PRESS_REG_IP, PRESS_DEL_YN, PRESS_FILENAME) 
                  VALUES(?,?,?,?,?,?,?)`
        
        let data = req.body

        // 썸네일 첨부 있음
        if (req.files) {
            
            const tempPath = Date.now()+'_' + data.fileName
            const path = `/press/${tempPath}`
            req.files.file.mv(`./server/assets${path}`)

            await db.query(sql, [data.title, path, data.contents, data.link, ip.getClientIp(req), 'Y', data.fileName])
            res.status(200).json({ result : 200 })
        // 썸네일 첨부 없음
        } else {
            
            await db.query(sql, [data.title, null, data.contents, data.link, ip.getClientIp(req), 'Y', null])
            res.status(200).json({ result : 200 })
        }

    } catch (err) {
        console.log(err)
        res.status(400).json({result : 400})
    }
    
}

//보도자료 업데이트
exports.updatePressForm = async (req, res) => {
    try {

        let data = req.body

        // 썸네일 첨부 있음
        if (req.files) {

            let [getfile] = await db.query(`SELECT PRESS_THUMBNAIL as path FROM TBL_WITH_PRESS WHERE SEQ =${req.query.seq}`)
            await fs.unlink(`./server/assets${getfile[0].path}`,(err)=> {if (err) console.log(err)})
            
            const tempPath = Date.now()+'_'+ data.fileName
            const path = `/press/${tempPath}`
            req.files.file.mv(`./server/assets${path}`)

            let sql = `UPDATE TBL_WITH_PRESS 
                       SET PRESS_TITLE = ?, PRESS_THUMBNAIL=?, PRESS_CONTENTS = ?, PRESS_LINK = ?, PRESS_REG_IP =?, PRESS_FILENAME=?
                       WHERE SEQ = ${req.query.seq}`

            await db.query(sql, [data.title, path, data.contents, data.link, ip.getClientIp(req), data.fileName])
            res.status(200).json({ result : 200 })
        // 썸네일 첨부 없음
        } else {

            let sql = `UPDATE TBL_WITH_PRESS 
                       SET PRESS_TITLE = ?, PRESS_CONTENTS = ?, PRESS_LINK = ?, PRESS_REG_IP =?
                       WHERE SEQ = ${req.query.seq}`

            await db.query(sql, [data.title, data.contents, data.link, ip.getClientIp(req)])
            res.status(200).json({ result : 200 })
        }

    } catch (err) {
        console.log(err)
        res.status(400).json({result : 400})
    }
}

//보도자료 삭제
exports.deletePressForm = async (req, res) => {
    try {
        
        let sql = `UPDATE TBL_WITH_PRESS SET PRESS_DEL_YN = 'N' WHERE SEQ = ?`

        await db.query(sql, [req.query.seq])
        res.status(200).json({result : 200})
        
    } catch (err) {
        console.log(err)
        res.status(400).json({result : 400})
    }
}