import request from 'superagent'

var wordUrl = '/words'

module.exports = {
  getWords: getWords,
  appendWord: appendWord,
  getBias: getBias
}

function getWords (callback) {
  request
    .get(wordUrl)
    .end(function (err, res) {
      if (err) {
        callback(err)
      } else {
        callback(null, res.body)
      }
    })
}

function appendWord (word, callback) {
  request
    .post(wordUrl)
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
    .get(wordUrl + '/bias?bias=' + bias.bias)
    .end(function (err, res) {
      if (err) {
        callback(err)
      } else {
        callback(null, res.body)
      }
    })
}
