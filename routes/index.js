var express = require('express')
var router = express.Router()

var db = require('../db')

router.get('/', (req,res) => {
  res.render('index')
})
//
// router.get('/lookup', (req, res) => {
//   db.getBias(req.app.get('connection'))
//     .then((word) => {
//       res.render('index', {word})
//     })
//     .catch((err) => {
//       res.status(500).send('DATABASE ERROR: ' + err.message)
//     })
// })

router.post('/lookup', (req,res) => {
  return 'chair'
})


module.exports = router
