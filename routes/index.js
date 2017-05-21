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

router.post('/', (req,res) => {
  req.app.get('db')('connection')
  .insert('name', req.body)
  .then((words) => {
    res.redirect('/', words)
  })
})


module.exports = router
