module.exports = {
  getBias,
  getWords,
  addWord
}

function getWords(connection) {
  return connection('words').select('*')
}

function getBias (bias, connection){
  return connection('words')
    .where('bias','=', bias)
    .select('bias', 'neutral', 'notes')
    .first()
}

function addWord(word, connection) {
  return connection('words').insert(word)
}
