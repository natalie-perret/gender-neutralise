var express = require('express')
var router = express.Router()

var db = require('../db')


router.get('/bias', (req, res) => {
  db.getBias(req.query.bias, req.app.get('knex'))
    .then((word) => {
      res.json(word)
    })
    .catch((err) => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

module.exports = router
