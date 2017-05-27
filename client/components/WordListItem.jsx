import React from 'react'

export default ({word, showDetails}) => {
  return (
    <div className="word-list-item">
      {`${word.bias} `}
      <a href="#" onClick={() => showDetails(word)}>details</a>
    </div>
  )
}
