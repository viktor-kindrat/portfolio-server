const Router = require("express");
const controller = require("../Controller/DbController");

const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
const cors = require('cors');

const router = new Router();
router.use(cors())

router.get("/getSkills", controller.getSkills)
router.get("/getProjects", controller.getProjects)
router.get("/getCertificates", controller.getCertificates)

module.exports = router
