require("dotenv").config()

class Controller {
    getDefault(req, res) {
        res.json({ status: "ok" }).status(200)
    }
}

module.exports = new Controller()