module.exports = {
  getBias: getBias,
  getWords: getWords,
  appendWord: appendWord
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

function appendWord(word, connection) {
  return connection('words').insert(word)
}
