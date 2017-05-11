
module.exports = {
  getBias: getBias
}

function getBias (connection) {
  return connection('words').select()
}

// function showNeutral (id, connection) {
//   return connection('words').where('id', id)
// }
