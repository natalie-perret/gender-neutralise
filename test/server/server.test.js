import test from 'ava'
import request from 'supertest'

import app from '../../server/server'

var setupDb = require('./setup-db')

setupDb(test, function (db) {
  app.set('knex', db)
})

test.serial('GET /words returns a list of words', t => {
  return request(app)
    .get('/words')
    .expect(200)
    .then((res) => {
      t.is(res.body.length, 73)
    })
    .catch((err) => {
      console.log(err.message)
    })
})

test.serial('POST /words/add_word', (t) =>{
  const newWord= {
    bias: "guys",
    neutral: "peeps",
    notes: "Better to be safe than sorry."
  }

  return request(app)
    .post('/words/add-word')
    .send(newWord, app.get('knex'))
    .expect(201)
    .then(()=> {
      return app.get('knex')('words').select()
    })
    .then((words) => {
      return new Promise((resolve, reject) => {
        t.is(words.length, 74)
        resolve()
      })
    })
  })
