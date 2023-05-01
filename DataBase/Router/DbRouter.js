const Router = require("express");
const controller = require("../Controller/DbController");

const multer = require('multer');
const upload = multer({ dest: 'uploads/' });


const router = new Router();

router.post("/writeSkill", upload.single('image'), controller.writeSkill)
router.post("/writeCertification", upload.single('image'), controller.writeCertification)
router.post("/writeProject", upload.single('image'), controller.writeProject)
router.get("/getSkills", controller.getSkills)

module.exports = router