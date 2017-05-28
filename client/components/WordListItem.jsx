import React from 'react'

export default ({word, showDetails}) => {
  return (
    <div className="word-list-item">
      <a href="#" onClick={() => showDetails(word)}>{`${word.bias}`}</a>
    </div>
  )
}
