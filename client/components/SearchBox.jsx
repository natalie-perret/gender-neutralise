import React from 'react'

import SearchResult from './SearchResult'

export default class SearchBox extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      bias: null
    }
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.saveCallback(this.state)
    this.setState({bias: ''})
  }

  render() {
    return (
      <div className="search-form">
        <h1 className="title">gender.neutralise</h1>
        <p>Looking for the gender neutral equivalent of a gender-biased term? Search here:</p>
        <form className="search-box-wrapper" action="/bias" method="get" onSubmit={this.handleSubmit.bind(this)}>
          <p><input type="text" name='bias' placeholder='Enter your word' className="search-box-input" value={this.state.bias} onChange={this.handleChange.bind(this)} /></p>
          <p><input type='submit' value='Neutralise!' className="search-box-button"/></p>
        </form>
      </div>
    )
  }
}
