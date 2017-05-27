import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'
import {Link} from 'react-router-dom'

import Home from "./Home"
import SearchBox from "./SearchBox"
import SearchResult from "./SearchResult"
import WordList from "./WordList"
import AddWord from './AddWord'
import WordDetails from './WordDetails'

const App = () => {
  return (
    <Router>
      <div className = "main-body">
        <h1 className="title-header"><Link to='/' >gender neutralise</Link></h1>
        <div className="container">
          <Route exact path='/' component={Home} />
          <Route exact path="/search" component={SearchBox} />
          <Route exact path='/result' component={SearchResult} />
          <Route exact path='/dictionary' component={WordList} />
          <Route exact path='/worddetails' component={WordDetails} />
          <Route exact path='/add' component={AddWord} />
        </div>
      </div>
    </Router>
  )
}

export default App
