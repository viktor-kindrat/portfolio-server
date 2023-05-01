let fs = require("fs");
const fsExtra = require('fs-extra');

const SkillModel = require("../Schema/Skill");
const CertificateModel = require("../Schema/Certificate")
const ProjectModel = require("../Schema/Project")

class Controller {
    writeSkill(req, res) {
        const name = req.body.name;
        const imageFile = req.file;
        const skill = new SkillModel({
            name: name,
            image: {
                data: fs.readFileSync(imageFile.path),
                contentType: imageFile.mimetype,
            },
        });
        skill.save();
        res.status(200).json({ success: true })
    }
    writeCertification(req, res) {
        try {
            const data = req.body;
            const imageFile = req.file;
            const certificate = new CertificateModel({
                image: {
                    data: fs.readFileSync(imageFile.path),
                    contentType: imageFile.mimetype,
                },
                name: data.name,
                dated: data.dated,
                academy: data.academy
            });
            certificate.save();
            res.status(200).json({ success: true, ...req.body })
        } catch (e) {
            console.log(e)
            res.status(500).json({ success: false })
        }
    }
    writeProject(req, res) {
        try {
            const data = req.body;
            const imageFile = req.file;
            console.log(data);
            const project = new ProjectModel({
                image: {
                    data: fs.readFileSync(imageFile.path),
                    contentType: imageFile.mimetype
                },
                name: data.name,
                type: data.projectType,
                description: data.description,
                features: data.feature,
                webLink: data.web,
                githubLink: data.github

            });
            project.save();
            res.status(200).json({ success: true, ...req.body })
        } catch (e) {
            console.log(e)
            res.status(500).json({ success: false })
        }
    }
    async getSkills(req, res) {
        try {
            let skills = await SkillModel.find({});
            let result = await skills.map(value => {
                let clone = {...value }
                clone["_doc"].image.data = clone["_doc"].image.data.toString("base64")
                return clone
            })
            res.json(result).status(200)
        } catch (e) {
            console.log(e)
        }

    }
}

module.exports = new Controller()