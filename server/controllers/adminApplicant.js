'use strict'
const db = require("../models/database")
const ip = require('request-ip')


// 지원자 리스트
exports.getApplicantList = async (req, res) => {
    try {

        let searchSql = ""
        let recruitSequence = ""

        if (req.query.seq) {
            recruitSequence = `AND a.RECRUIT_SEQ = ${req.query.seq}` 
        }

        if (req.query.search) {
            inSql = `AND (r.RECRUIT_TITLE LIKE '%${req.query.search}%'
                     OR r.RECRUIT_LOC LIKE '%${req.query.search}%' 
                     OR a.APPLICANT_NAME LIKE '%${req.query.search}%'
                     OR a.APPLICANT_EMAIL LIKE '%${req.query.search}%'
                     OR a.APPLICANT_TEL '%${req.query.search}%')`
        } 

        let sql = `SELECT 
                   a.SEQ AS seqApplicant, r.SEQ AS seqRecruit , r.RECRUIT_TITLE AS title, r.RECRUIT_LOC AS location, 
                   a.APPLICANT_NAME AS name, a.APPLICANT_EMAIL AS email, a.APPLICANT_TEL AS tel, 
                   a.APPLICANT_FILE_PATH AS file, a.APPLICANT_FILE_NAME AS fileName, a.APPLICANT_REG_DATE AS time
                   FROM TBL_WITH_APPLICANTS AS a
                   INNER JOIN TBL_WITH_RECRUIT AS r ON a.RECRUIT_SEQ = r.SEQ
                   WHERE a.APPLICANT_DEL_YN = "Y"
                   ${recruitSequence}
                   ${searchSql}
                   ORDER BY a.SEQ DESC`
        
        let [ApplicantList] = await db.query(sql)
        let rowNum = ApplicantList.length
        ApplicantList.forEach(x => {x.num = rowNum; x.time = x.time.toLocaleString(); rowNum--})
        res.status(200).json({result : ApplicantList})

    } catch (err) {
        console.log(err)
        res.status(400).json({result : err})
    }
}

// 지원자 상세보기
exports.getApplicantDetail = async (req, res) => {
    try {

        let sql = `SELECT 
                   a.SEQ AS seqApplicant, r.SEQ AS seqRecruit , r.RECRUIT_TITLE AS title, r.RECRUIT_LOC AS location, 
                   a.APPLICANT_NAME AS name, a.APPLICANT_EMAIL AS email, a.APPLICANT_TEL AS tel, 
                   a.APPLICANT_FILE_PATH AS file, a.APPLICANT_FILE_NAME AS fileName, a.APPLICANT_REG_DATE AS time
                   FROM TBL_WITH_APPLICANTS AS a
                   INNER JOIN TBL_WITH_RECRUIT AS r ON a.RECRUIT_SEQ = r.SEQ
                   WHERE a.APPLICANT_DEL_YN = 'Y' AND a.SEQ = ${req.query.seq}`

        let [ApplicantDetail] = await db.query(sql)
        ApplicantDetail[0].time = ApplicantDetail[0].time.toLocaleString();
        res.status(200).json({result : ApplicantDetail})

    } catch (err) {
        console.log(err)
        res.status(400).json({result : err})
    }
}

/// 지원자 업로드
exports.addApplicantForm = async (req, res) => {
    try {

        const data = req.body

        let sql = `INSERT INTO TBL_WITH_APPLICANTS
                   (APPLICANT_NAME, APPLICANT_EMAIL, APPLICANT_TEL, APPLICANT_RULE_YN, APPLICANT_PER_YN, APPLICANT_SENSE_YN,
                   APPLICANT_FILE_PATH, APPLICANT_FILE_NAME, RECRUIT_SEQ) 
                   VALUES(?,?,?,?,?,?,?,?,?)`

        const tempPath = Date.now()+'_'+ data.fileName
        const path = `/applicant/${tempPath}`
        req.files.file.mv(`./server/assets${path}`)

        await db.query(sql, [data.name, data.email, data.tel, data.rule, data.personal, data.sensitive, path, data.fileName, data.seqRecruit])
        res.status(200).json({ result : 200 })
     

    } catch (err) {
        console.log(err)
        res.status(400).json({ result : err })
    }
}  


// 지원자 삭제
exports.deleteApplicantForm = async (req, res) => {
    try {

        let sql = `UPDATE TBL_WITH_APPLICANTS SET APPLICANT_DEL_YN = 'N' WHERE SEQ = ?`

        await db.query(sql, [req.query.seq])
        res.status(200).json({result : 200})
        
    } catch (err) {
        console.log(err)
        res.status(400).json({result : err})
    }
}
