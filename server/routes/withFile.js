'use strict'

const express = require("express")
const router = express.Router()
const authMiddleware = require('../middlewares/auth-middleware')

// 브로슈어
const BrochureManager = require("../controllers/adminBrochure");
    router.get("/Api/adminBrochureManager/getBrochureList",     authMiddleware,   BrochureManager.getBrochureList
        /*
          
        */
    )
    router.get("/Api/adminBrochureManager/getBrochureDetail",   authMiddleware,   BrochureManager.getBrochureDetail)
    router.get("/Api/adminBrochureManager/deleteBrochureForm",  authMiddleware,   BrochureManager.deleteBrochureForm)
    router.post("/Api/adminBrochureManager/addBrochureForm",    authMiddleware,   BrochureManager.addBrochureForm)
    router.post("/Api/adminBrochureManager/updateBrochureForm", authMiddleware,   BrochureManager.updateBrochureForm)

// 메뉴얼 
const ManualManager = require("../controllers/adminManual");
    router.get("/Api/adminManualManager/getManualList",     authMiddleware,   ManualManager.getManualList)
    router.get("/Api/adminManualManager/getManualDetail",   authMiddleware,   ManualManager.getManualDetail)
    router.get("/Api/adminManualManager/deleteManualForm",  authMiddleware,   ManualManager.deleteManualForm)
    router.post("/Api/adminManualManager/addManualForm",    authMiddleware,   ManualManager.addManualForm)
    router.post("/Api/adminManualManager/updateManualForm", authMiddleware,   ManualManager.updateManualForm)

// 업데이트
const UpdateManager = require("../controllers/adminUpdate");
    router.get("/Api/adminUpdateManager/getUpdateList",     authMiddleware,   UpdateManager.getUpdateList)
    router.get("/Api/adminUpdateManager/getUpdateDetail",   authMiddleware,   UpdateManager.getUpdateDetail)
    router.get("/Api/adminUpdateManager/deleteUpdateForm",  authMiddleware,   UpdateManager.deleteUpdateForm)
    router.post("/Api/adminUpdateManager/addUpdateForm",    authMiddleware,   UpdateManager.addUpdateForm)
    router.post("/Api/adminUpdateManager/updateUpdateForm", authMiddleware,   UpdateManager.updateUpdateForm)


module.exports = router;