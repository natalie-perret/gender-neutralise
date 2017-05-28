import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'

import Home from "./Home"
import SearchBox from "./SearchBox"
import SearchResult from "./SearchResult"
import WordList from "./WordList"
import AddWord from './AddWord'
import WordDetails from './WordDetails'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render () {
    return (
      <Router>
        <div className="container">
          <Route exact path='/' component={Home} />
          <Route exact path="/search" component={SearchBox} />
          <Route exact path='/result' component={SearchResult} />
          <Route exact path='/dictionary' component={WordList} />
          <Route exact path='/worddetails' component={WordDetails} />
          <Route exact path='/add' component={AddWord} />
        </div>
      </Router>
    )
  }
}
