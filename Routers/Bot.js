let express = require("express")
let app = express();

let bodyParser = require('body-parser');
const cors = require('cors');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors())


require("dotenv").config()
const TOKEN = process.env.TELEGRAM_TOKEN;
const TelegramBot = require('node-telegram-bot-api');

const bot = new TelegramBot(TOKEN, { polling: true });
bot.on("message", msg => {
    bot.sendMessage(msg.chat.id, `Your chat id is: \`${msg.chat.id}.\``, {
        parse_mode: "MarkdownV2"
    })
})

app.post("/", (req, res) => {
    let data = req.body;
    bot.sendMessage(process.env.TELEGRAM_ID, `<b>NEW message</b>\n\n<b>${data.name}</b>\n${data.message}`, {
        parse_mode: 'HTML'
    })
    res.json({ msg: "success" })
})

module.exports = app;