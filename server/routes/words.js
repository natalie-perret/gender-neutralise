var express = require('express')
var router = express.Router()

var db = require('../db')


router.get('/', function (req, res) {
  db.getWords(req.app.get('knex'))
  .then((words) => {
    res.json(words)
  })
})

router.post('/', function (req, res) {
  db.saveWord(req.body)
  res.sendStatus(200)
})

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
