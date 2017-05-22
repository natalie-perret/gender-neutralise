var express = require('express')
var router = express.Router()

var db = require('../db')

router.get('/', (req,res) => {
  res.render('index')
})

router.get('/:id', (req, res) => {
  console.log(req.params.id)
  db.getBias(req.params.id, req.app.get('connection'))
    .then((word) => {
      res.send({word:word})
      console.log(word)
    })
    .catch((err) => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})


module.exports = router
