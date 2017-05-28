import test from 'ava'
import nock from 'nock'

import * as api from '../../client/api'

test.cb('api.getWords', t => {
  let scope = nock('http://localhost:80')
    .get('/api-v1/words')
    .reply(200, {message: 'getWords working'})

  api.getWords((actual) => {
    scope.done()
    t.is(actual.message, 'getWords working')
    t.end()
  })
})


test.cb('api.getBias', t => {
  let scope = nock('http://localhost:80')
    .get('/api-v1/words/bias?bias=chairman')
    .reply(200, {message: 'getWord working'})

  api.getUser(99902, (actual) => {
    scope.done()
    t.is(actual.message, 'getWord working')
    t.end()
  })
})
