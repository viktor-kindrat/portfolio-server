const { Schema, model } = require("mongoose");

let Project = new Schema({
    image: { data: Buffer, contentType: String, },
    name: { type: String, required: true },
    type: { type: String, required: true },
    description: { type: String, required: true },
    features: { type: Array, required: true },
    webLink: { type: String, required: true },
    githubLink: { type: String, required: true }
})

module.exports = new model("Project", Project)