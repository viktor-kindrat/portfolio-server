require("dotenv").config()
const TelegramBot = require('node-telegram-bot-api');
const token = process.env.TELEGRAM_TOKEN;

const bot = new TelegramBot(token, {polling: true});

class Controller {
    getDefault(req, res) {
        res.json({ status: "ok" }).status(200)
    }
    sendMessage(req, res) {
        let data = req.body;
        bot.sendMessage(process.env.TELEGRAM_ID, `<b>NEW message</b>\n\n<b>${data.name}</b>\n${data.message}`, {
            parse_mode: 'HTML'
        })
        res.json({ status: "ok" }).status(200)
    }
}

module.exports = new Controller()