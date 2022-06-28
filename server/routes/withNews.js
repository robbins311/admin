'use strict'

const express = require("express")
const router = express.Router()
const authMiddleware = require('../middlewares/auth-middleware')




// 공지사항
const NoticeManager = require("../controllers/adminNotice");
    router.get("/Api/adminNoticeManager/getNoticeList",     authMiddleware,  NoticeManager.NoticeList
        /*


        */
    )
    router.get("/Api/adminNoticeManager/getNoticeDetail",   authMiddleware,  NoticeManager.NoticeListDetail)
    router.get("/Api/adminNoticeManager/deleteNoticeForm",  authMiddleware,  NoticeManager.deleteNoticeForm
        /*
          #swagger.tags = ['공지사항']
          #
        */
    )
        
    router.post("/Api/adminNoticeManager/addNoticeForm",    authMiddleware,  NoticeManager.addNoticeForm
        /*
          #swagger.tags = ['공지사항']
          #swagger.summary = 'Some summary...' 
          #swagger.parameters['$ref'] = ['#/components/parameters/file']
        */
    )
    router.post("/Api/adminNoticeManager/updateNoticeForm", authMiddleware,  NoticeManager.updateNoticeForm
         /*
          #swagger.tags = ['공지사항']
          #swagger.summary = 'Some summary...
          #swagger.consumes = ['multipart/form-data']  
          #swagger.parameters['$ref'] = ['#/components/parameters/file']
        */
    )




// 보도자료   
const PressManager = require("../controllers/adminPress");
    router.get("/Api/adminPressManager/getPressList",     authMiddleware,   PressManager.getPressList)
    router.get("/Api/adminPressManager/getPressDetail",   authMiddleware,   PressManager.getPressDetail)
    router.get("/Api/adminPressManager/deletePressForm",  authMiddleware,   PressManager.deletePressForm)
    router.post("/Api/adminPressManager/addPressForm",    authMiddleware,   PressManager.addPressForm)
    router.post("/Api/adminPressManager/updatePressForm", authMiddleware,   PressManager.updatePressForm)




// 인증 및 수상
const AwardManager = require("../controllers/adminAward");
    router.get("/Api/adminAwardManager/getAwardList",     authMiddleware,   AwardManager.getAwardList)
    router.get("/Api/adminAwardManager/getAwardDetail",   authMiddleware,   AwardManager.getAwardDetail)
    router.get("/Api/adminAwardManager/deleteAwardForm",  authMiddleware,   AwardManager.deleteAwardForm)
    router.post("/Api/adminAwardManager/addAwardForm",    authMiddleware,   AwardManager.addAwardForm)
    router.post("/Api/adminAwardManager/updateAwardForm", authMiddleware,   AwardManager.updateAwardForm)


module.exports = router;
