import React from 'react'
import WordListItem from './WordListItem'

export default (props) => {
  return (
    <div className="word-list">
    {props.words.map((word) => {
      return <WordListItem
        key={word.id}
        word={word}
        hideDetails={props.hideDetails}
        showDetails={props.showDetails} />
    })}
    </div>
  )
}
