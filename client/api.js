import request from 'superagent'

module.exports = {
  getWords,
  saveWord,
  getBias
}

function getWords (callback) {
  request
    .get('/words')
    .end(function (err, res) {
      if (err) {
        callback(err)
      } else {
        callback(null, res.body)
      }
    })
}

function saveWord (word, callback) {
  request
    .post('/words/add')
    .send(word)
    .end(function (err, res) {
      if (err) {
        callback(err)
      } else {
        callback(null)
      }
    })
}

function getBias (bias, callback) {
  request
    .get('/words' + '/bias?bias=' + bias.bias)
    .end(function (err, res) {
      if (err) {
        callback(err)
      } else {
        callback(null, res.body)
      }
    })
}
