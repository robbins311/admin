const express = require("express")
const router = express.Router()


// 채용공고
const RecruitManager = require("../controllers/adminRecruit");

// /**
//  * @swagger
//  * /books:
//  *    get:
//  *      description: Get all books
//  *      responses:
//  *          200:
//  *          description: Success
//  */
router.get("/Api/adminRecruitManager/getRecruitList",     RecruitManager.getRecruitList)
    

router.get("/Api/adminRecruitManager/getRecruitDetail",   RecruitManager.getRecruitDetail)
    

router.get("/Api/adminRecruitManager/deleteRecruitForm",  RecruitManager.deleteRecruitForm)
    

router.post("/Api/adminRecruitManager/addRecruitForm",    RecruitManager.addRecruitForm)
    

router.post("/Api/adminRecruitManager/updateRecruitForm", RecruitManager.updateRecruitForm)


// 지원자

const ApplicantManager = require("../controllers/adminApplicant")

    router.get("/Api/adminApplicantManager/getApplicantList",     ApplicantManager.getApplicantList)
    router.get("/Api/adminApplicantManager/getApplicantDetail",   ApplicantManager.getApplicantDetail)
    router.get("/Api/adminApplicantManager/deleteApplicantForm",  ApplicantManager.deleteApplicantForm)
    router.post("/Api/adminApplicantManager/addApplicantForm",    ApplicantManager.addApplicantForm)


module.exports = router;