var env = process.env.NODE_ENV || 'development'
var knex = require('knex')
var config = require('./knexfile')[env]

var db = knex(config)

var fs = require("fs")
var csv = require("fast-csv")

var words = []
fs.createReadStream("./words.csv")
  .pipe(csv())
  .on("data", function(data){
    words.push({
      bias: data[0],
      neutral: data[1],
      notes: data[2]
    })
  })
  .on("end", function(data){
    console.log(words[0].bias)
    db('words').delete().then(() => {
      db('words').insert(words).then(() => {
        db('words').select()
        .then((result) =>{
          console.log(result.length)
          process.exit()
        })
      })
    })
  })
