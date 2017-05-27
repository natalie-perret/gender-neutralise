import React from 'react'

export default (props) => {
  const {word, isVisible} = props
  const hide = () => props.hideDetails()
  const classes = "word-details " + isVisible ? 'visible' : 'hidden'
  return (
    <div className={classes}>
      <h2>Details</h2>
      <p>Bias: {word.bias}</p>
      <p>Neutral: {word.neutral}</p>
      <p>Notes: {word.notes}</p>
      <a href="#" onClick={hide}>Close</a>
    </div>
  )
}
