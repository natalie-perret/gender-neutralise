var express = require('express')
var router = express.Router()

var db = require('../db')

router.get('/', (req,res) => {
  res.render('index')
})

router.get('/', (req, res) => {
  db.getBias(req.app.get('connection'))
    .then(function (word) {
      res.render('index', {word})
    })
    .catch(function (err) {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

module.exports = router
