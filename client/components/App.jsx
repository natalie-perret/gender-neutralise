import React from 'react'

import * as api from '../api'
import SearchBox from './SearchBox'
import SearchResult from './SearchResult'


export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      error: null,
      word: null
    }
  }

  getBias(bias) {
    api.getBias(bias, (err, word) => {
      this.setState({
        word: word
      })
    })
  }

  render () {
    return (
      <div className="container">
        <div>
          <img src=""/>
        </div>
        <div className = "row">

            {this.state.word && <SearchResult word={this.state.word} />}

            <SearchBox saveCallback={this.getBias.bind(this)}/>

        </div>
      </div>
    )
  }

}
