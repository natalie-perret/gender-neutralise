
module.exports = {
  getBias: getBias
}

function getBias (bias, connection) {
  console.log(bias)
  return connection('words')
    .where('bias', bias)
    .first()
}
