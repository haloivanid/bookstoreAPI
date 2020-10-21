const express = require('express')
const app = express.Router()
const db = require('../../controller/dbController')

const path = require('path')
const dirName = path.resolve(__dirname).split('/').pop()

const authorization = require('../../middleware/authorizationMiddleware')
app.use(authorization)


app.post(`/${dirName}`, (req, res) => {
    if (req.body) {
        const result = db.add(`/${dirName}`, req.body)
        if (result) {
            res.status(200).send(result)
        }
        else {
            res.sendStatus(400)
        }

    }
})

module.exports = app