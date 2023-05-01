const express = require("express");
const Controller = require("../Controllers/AppController")

let Router = express();

Router.get("/", Controller.getDefault);

module.exports = Router