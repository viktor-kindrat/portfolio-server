const { model, Schema } = require("mongoose");

let Skill = new Schema({
    image: { data: Buffer, contentType: String, },
    name: { type: String, required: true }
})

module.exports = model("Skill", Skill)