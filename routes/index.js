var express = require('express')
var router = express.Router()

var db = require('../db')

router.get('/', (req,res) => {
  res.render('home')
})

// router.get('/', (req, res) => {
//   console.log('salut')
//   db.getBias(req.query.bias, req.app.get('connection'))
//     .then((word) => {
//       res.render('index', word)
//     })
//     .catch((err) => {
//       res.status(500).send('DATABASE ERROR: ' + err.message)
//     })
//     console.log(word)
//     console.log(req.query.bias)
// })


router.get('/bias', (req,res) => {

})

module.exports = router
