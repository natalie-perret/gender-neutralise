
module.exports = {
  getBias: getBias,
  showNeutral: showNeutral
}

function getBias (connection, tableName, id) {
  return connection(tableName)
  .where(`${tableName}.id`, id)
  .first
}

function showNeutral (connection, id) {
  return connection('words')
  .where('id', id)
  .select('id', 'bias', 'neutral')
  .first
}
