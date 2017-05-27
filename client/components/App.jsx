import React from 'react'

import * as api from '../api'
import SearchBox from './SearchBox'
import SearchResult from './SearchResult'
import AddWord from './AddWord'
import WordList from './WordList'
import WordDetails from './WordDetails'


export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      error: null,
      word: null,
      words: [],
      activeWord: null,
      detailsVisible: false,
      addWordVisible: false
    }
  }


  ListAllWords (err, words) {
    this.setState({
      error: err,
      words: words || []
    })
    api.getWords((err, words) => this.ListAllWords(err, words))
  }

  refreshList (err) {
    this.setState({
      error: err,
      addWordVisible: false
    })
    api.getWords(this.ListAllWords.bind(this))
  }

  showDetails (word) {
    this.setState({
      activeWord: word,
      detailsVisible: true
    })
  }

  hideDetails () {
    this.setState({
      detailsVisible: false
    })
  }

  getBias(bias) {
    api.getBias(bias, (err, word) => {
      this.setState({
        word: word
      })
    })
  }

  showAddWord () {
    this.setState({
      addWordVisible: true
    })
  }

  addWord(word) {
    api.appendWord(word, (error) => {
      error ? this.setState({error}) : this.refreshList()
    })
  }

  hideAddWord () {
    this.setState({ addWordVisible: false })
  }

  render () {
    return (
      <div className="container">
        <div>
          <img src=""/>
        </div>
        <div className = "search">
            {this.state.word && <SearchResult word={this.state.word} />}
            <SearchBox saveCallback={this.getBias.bind(this)}/>
        </div>

        <div className = "dictionary">
            <p>Don't have a specific word in mind but want to see how gender-biased our world is?</p>
            <p><a href='#' onClick={(e) => this.ListAllWords(e)}>Gender-Bias Dictionary</a></p>
            <WordList
              showDetails={(word) => this.showDetails(word)}
              words={this.state.words} />
            {this.state.detailsVisible && <WordDetails
              isVisible={this.state.detailsVisible}
              hideDetails={() => this.hideDetails()}
              word={this.state.activeWord} />}
        </div>

        <div className="adding-word">
          <p>Can't find your word? Add it to the dictionary:</p>
          <p><a href='#' onClick={(e) => this.showAddWord(e)}>Add a word</a></p>
          {this.state.addWordVisible && <AddWord
            submitCallback={this.addWord.bind(this)}
            cancelCallback={this.hideAddWord.bind(this)}
            />}
        </div>

      </div>
    )
  }

}
