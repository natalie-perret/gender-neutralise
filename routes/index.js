var express = require('express')
var router = express.Router()

var db = require('../db')

router.get('/', (req,res) => {
  res.render('home')
})

router.get('/bias', (req, res) => {
  db.getBias(req.query.bias, req.app.get('connection'))
    .then((word) => {
      res.render('home', {word})
    })
    .catch((err) => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})


module.exports = router
