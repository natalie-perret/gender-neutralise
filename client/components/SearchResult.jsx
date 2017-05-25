import React from 'react'

export default function(props){
  return(
    <div className="search-result">
      <p id="neutral">{props.word.neutral}</p>
      <p id="bias">{props.word.bias}</p>
      <p id="notes">{props.word.notes}</p>
    </div>
  )
}
