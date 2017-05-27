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

  fieldChanged (e) {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    })
  }

  addWord (e) {
    e.preventDefault()
    const word = this.state
    api.appendWord(word, this.props.finishAdd)
  }

  render () {
    return (
      <div className="add-word">
        <form>
          <p><input placeholder="Enter biased word" name='bias'
            onChange={e => this.fieldChanged(e)}
            value={this.state.bias}
            /></p>
          <p><input placeholder="Enter gender neutral equivalent" name='neutral'
            onChange={e => this.fieldChanged(e)}
            value={this.state.neutral}
            /></p>
          <p><input placeholder="Any notes" name='notes'
            onChange={e => this.fieldChanged(e)}
            value={this.state.notes}
            /></p>
          <button onClick={e => this.addWord(e)}>Add word</button> {' '}
          <a href="#" onClick={this.props.finishAdd}>Cancel</a>
        </form>
      </div>
    )
  }
}
