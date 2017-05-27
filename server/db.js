module.exports = {
  getBias: getBias,
  getWords: getWords,
  saveWord: saveWord
}

function getWords(connection) {
  return connection('words')
}

function getBias (bias, connection){
  return connection('words')
    .where('bias','=', bias)
    .select('bias', 'neutral', 'notes')
    .first()
}

function saveWord(word, connection) {
  return connection('words')
}
