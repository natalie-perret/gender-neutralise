import React from 'react'

export default (props) => {
  const {word, isVisible} = props
  const hide = () => props.hideDetails()
  const classes = "word-details " + isVisible ? 'visible' : 'hidden'
  return (
    <div className={classes}>
      <p id="neutral">{word.neutral}</p>
      <p id="bias">{word.bias}</p>
      <p id="notes">{word.notes}</p>
      <a href="#" onClick={hide}>Close</a>
    </div>
  )
}
