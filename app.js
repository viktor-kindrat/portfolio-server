require('dotenv').config()
const express = require("express");
const bodyParser = require("body-parser")
const cors = require("cors")
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3000;

const Router = require("./Routers/AppRouter");
const DbRouter = require("./DataBase/Router/DbRouter")
const Bot = require("./Routers/Bot")

let app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(Router);
app.use("/db", DbRouter);
Router.use("/sendMessage", Bot)
app.use(cors());
app.options('*', cors());

let start = async() => {
    try {
        await mongoose.connect(`mongodb+srv://root:${process.env.MONGOPASSWORD}@cluster0.plpewak.mongodb.net/?retryWrites=true&w=majority`)
        app.listen(PORT, () => console.log(`Running on port ${PORT}`))
    } catch (e) {
        console.log(e)
    }
}

start();
