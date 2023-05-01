let { Schema, model } = require("mongoose");

let Certificate = new Schema({
    image: { data: Buffer, contentType: String, },
    name: { type: String, required: true },
    dated: { type: String, required: true },
    academy: { type: String, required: true }
})

module.exports = new model("Certificate", Certificate)