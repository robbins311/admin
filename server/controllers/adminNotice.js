'use strict'
const db = require("../models/database")
const ip = require('request-ip')
const fs = require('fs')

//공지사항 리스트
exports.NoticeList = async (req, res) => {
	try {
		
        let search = ``;
        if(req.query.searchString != null){
            if(req.query.searchField == "all"){
             search = `AND (NOTICE_TITLE LIKE '%${req.query.searchString}%' or NOTICE_CONTENTS LIKE '%${req.query.searchString}%')`;
            }else{
             search = `AND (${req.query.searchField} LIKE '%${req.query.searchString}%')`;
            }
        }
 
         let sql = `SELECT NOTICE_TITLE as TITLE, NOTICE_REG_DATE as DATE, SEQ, NOTICE_FILE_PATH as file, NOTICE_FILE_NAME as fileName
                    FROM TBL_WITH_NOTICE
                    WHERE NOTICE_DEL_YN ='Y' 
                    ${search}
                    ORDER BY SEQ DESC`

        let [noticeList] = await db.query(sql)
        let rowNum = noticeList.length;
        noticeList.forEach(x => {x.NUM = rowNum; x.DATE = x.DATE.toLocaleString(); rowNum--})        
		res.status(200).json({result : noticeList})

	} catch (err) {
		console.log(err)
        res.status(400).json({reulst : 400})
	}
}


//공지사항 상세보기
exports.NoticeListDetail = async (req, res) => {
	try {
        
    
        let sql = `SELECT NOTICE_TITLE as TITLE, NOTICE_CONTENTS as CONTENTS, NOTICE_FILE_PATH as FILE_PATH, 
                   NOTICE_FILE_NAME as FILE_NAME, NOTICE_REG_DATE as DATE
                   FROM TBL_WITH_NOTICE
                   WHERE NOTICE_DEL_YN = 'Y'AND SEQ = ${req.query.SEQ}`
            
        let [noticeDetail] = await db.query(sql)
        noticeDetail[0].DATE = noticeDetail[0].DATE.toLocaleString();
        res.status(200).json({result: noticeDetail})

    } catch (error) {
        console.log(err)
        res.status(400).json({reulst : 400})
    }
}

//공지사항 등록하기
exports.addNoticeForm = async (req, res) => {
	try {
        const data = req.body
        const filefile = req.files
        console.log(filefile)

        const sql = `INSERT INTO TBL_WITH_NOTICE
                    (NOTICE_TITLE, NOTICE_CONTENTS, NOTICE_FILE_PATH, NOTICE_FILE_NAME, NOTICE_REG_IP) VALUES(?,?,?,?,?)`
        // 첨부파일 x
        if (req.files == null) {

            const values = [data.NOTICE_TITLE, data.NOTICE_CONTENTS, null, null, ip.getClientIp(req)]
            await db.query(sql, values)
            res.status(200).json({result:200});

        // 첨부파일 o
        } else {

            let files = req.files.NOTICE_FILE_NAME;
            let tempPaths =  Date.now()+'_' + data.fileName
            let paths = `/notice/${tempPaths}`
            await files.mv(`./server/assets${paths}`)   
            
            const values = [data.NOTICE_TITLE, data.NOTICE_CONTENTS, paths, data.fileName, ip.getClientIp(req)]
            await db.query(sql, values)
            res.status(200).json({result:200});
        }

    } catch (err) {
        console.log(err)
        res.status(400).json({result:400})
    }
	
}

//공지사항 수정하기
exports.updateNoticeForm = async (req, res) => {
	try {
		
		const data = req.body
        const seq = req.query.SEQ
        // 파일 없을 때
		if (req.files == null) {
            
            let sql = `UPDATE TBL_WITH_NOTICE SET NOTICE_TITLE = ?, NOTICE_CONTENTS = ?, NOTICE_REG_IP = ? WHERE SEQ = ?`
            let values = [data.NOTICE_TITLE, data.NOTICE_CONTENTS, ip.getClientIp(req), seq]
            await db.query(sql, values)
			res.status(200).json({result:400})

		} else {
            // 기존 파일 지우기
            let [getfile] = await db.query(`SELECT NOTICE_FILE_PATH as path FROM TBL_WITH_NOTICE WHERE SEQ =${seq}`)
            fs.unlink(`./server/assets${getfile[0].path}`,(err)=> {if (err) console.log(err)})
            
            // 새 파일 경로 설정 및 이동
			let files = req.files.NOTICE_FILE_NAME;
			let tempPaths =  Date.now()+'_' + data.fileName
			let paths = `/notice/${tempPaths}`
			files.mv(`./server/assets${paths}`)

            let sql = `UPDATE TBL_WITH_NOTICE SET NOTICE_TITLE = ?, NOTICE_CONTENTS = ?, NOTICE_FILE_PATH = ?, NOTICE_FILE_NAME =?, NOTICE_REG_IP = ? WHERE SEQ = ?`
            let values = [data.NOTICE_TITLE, data.NOTICE_CONTENTS, paths, data.fileName, ip.getClientIp(req), seq]
            await db.query(sql, values)

            res.status(200).json({result : 200})
		}

	} catch (err) {
		console.log(err)
		res.status(400).json({result : 400})
	}
}

//공지사항 삭제하기
exports.deleteNoticeForm = async (req, res) => {
    try {

        let sql = `UPDATE TBL_WITH_NOTICE SET NOTICE_DEL_YN = 'N' WHERE SEQ = ?`
        await db.query(sql, [req.query.SEQ])

        res.status(200).json({result : 200})
        
    } catch (err) {
        console.log(err)
        res.status(400).json({result : 400})
    }
}