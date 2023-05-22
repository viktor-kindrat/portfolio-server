const express = require("express");
const Controller = require("../Controllers/AppController");
const cors = require("cors")

let Router = express();
Router.use(cors())

Router.get("/", Controller.getDefault);
Router.post("/sendMessage", Controller.sendMessage);

module.exports = Router