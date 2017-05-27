import React from 'react'

import api from '../api'

export default class AddWord extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      bias: "",
      neutral: "",
      notes: ""
    }
  }

  handleChange (e) {
    this.setState({[e.target.name]: e.target.value})
  }

  handleSubmit (e) {
    e.preventDefault()
    api.saveWord(this.state, (err) => {
      if (!err) console.log("New word added to dictionary")
    })
  }

  render () {
    return (
      <div className="add-word">
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <p><input type='text' placeholder="Enter biased word" name='bias'
            value={this.state.bias}
            onChange={(e) => this.handleChange(e)}
            /></p>
          <p><input type='text' placeholder="Enter gender neutral equivalent" name='neutral'
            value={this.state.neutral}
            onChange={(e) => this.handleChange(e)}
            /></p>
          <p><input type='text' placeholder="Any notes" name='notes'
            value={this.state.notes}
            onChange={(e) => this.handleChange(e)}
            /></p>
          <input type='submit' value='submit' />
        </form>
      </div>
    )
  }
}
