import React from 'react'

export default ({word, isVisible, hideDetails}) => {
  const hide = () => hideDetails()
  const classes = "word-details " + isVisible ? 'visible' : 'hidden'
  return (
    <div className={classes}>
      <p id="neutral">{word.neutral}</p>
      <p id="bias">{word.bias}</p>
      <p id="notes">{word.notes}</p>
      <a href="#" className="close-button" onClick={hide}>Close</a>
    </div>
  )
}
