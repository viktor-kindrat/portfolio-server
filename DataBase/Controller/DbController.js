let fs = require("fs");
const fsExtra = require('fs-extra');

const SkillModel = require("../Schema/Skill");
const CertificateModel = require("../Schema/Certificate")
const ProjectModel = require("../Schema/Project")

class Controller {
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
    async getProjects(req, res) {
        try {
            let project = await ProjectModel.find({});
            let result = await project.map(value => {
                let clone = {...value }
                clone["_doc"].image.data = clone["_doc"].image.data.toString("base64")
                return clone
            })
            res.json(result).status(200)
        } catch (e) {
            console.log(e)
        }
    }
    async getCertificates(req, res) {
        try {
            let certificates = await CertificateModel.find({});
            let result = await certificates.map(value => {
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