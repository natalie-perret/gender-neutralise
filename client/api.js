import request from 'superagent'

var wordUrl = 'http://localhost:3000/words'

module.exports = {
  getBias: getBias
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
