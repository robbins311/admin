'use strict'

const express = require("express")
const router = express.Router()
const authMiddleware = require('../middlewares/auth-middleware')


// 제품문의
const QuestionManager = require("../controllers/adminQuestion");
    router.get("/Api/adminQuestionManager/getQuestionList",     authMiddleware,   QuestionManager.getQuestionList)
    router.get("/Api/adminQuestionManager/getQuestionDetail",   authMiddleware,   QuestionManager.getQuestionDetail)
    router.get("/Api/adminQuestionManager/deleteQuestionForm",  authMiddleware,   QuestionManager.deleteQuestionForm)
    router.post("/Api/adminQuestionManager/addQuestionForm",    authMiddleware,   QuestionManager.addQuestionForm)

// 회원가입, 로그인, 리프레쉬 토큰 
const UserManager = require("../controllers/adminUser")
    router.post("/Api/adminUserManager/addUser",      UserManager.addUser)
    router.post("/Api/adminUserManager/checkUser",    UserManager.checkUser)
    router.post("/Api/adminUserManager/refreshUser",  UserManager.refreshUser)

// 파일 다운로드
const fileManager = require("../controllers/fileDown")
    router.get("/download", fileManager.fileDown)

    
module.exports = router;
