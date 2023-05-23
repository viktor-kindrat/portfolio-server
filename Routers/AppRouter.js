const express = require("express");
const Controller = require("../Controllers/AppController");
const cors = require("cors");

let Router = express();
Router.use(cors())

Router.get("/", Controller.getDefault);

module.exports = Router