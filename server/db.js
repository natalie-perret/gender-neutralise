module.exports = {
  getBias: getBias
}

function getBias (bias, connection){
  return connection('words')
    .where('bias','=', bias)
    .select('bias', 'neutral', 'notes')
    .first()
}
