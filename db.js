
module.exports = {
  getBias: getBias
}

function getBias (id, connection) {
  return connection('words').where('id', id)
}
