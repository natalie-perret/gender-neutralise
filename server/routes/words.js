var express = require('express')
var router = express.Router()

var db = require('../db')


router.get('/', function (req, res) {
  db.getWords(req.app.get('knex'))
  .then((words) => {
    res.json(words)
  })
  .catch((err) => {
    res.status(500).send('DATABASE ERROR: ' + err.message)
  })
})

router.post('/add', function (req, res) {
  db.addWord(req.body, req.app.get('knex'))
    .then((result) => {
      res.sendStatus(201)
    })
    .catch(function (err){
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
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
