const Router = require("express");
const controller = require("../Controller/DbController");

const multer = require('multer');
const upload = multer({ dest: 'uploads/' });


const router = new Router();

router.get("/getSkills", controller.getSkills)
router.get("/getProjects", controller.getProjects)
router.get("/getCertificates", controller.getCertificates)

module.exports = router
