import React, { Component } from 'react'
import { observer } from 'mobx-react'
import store from './App.store'

@observer
export default class App extends Component {
  addToList = e => {
    if (e.which === 13) {
      e.preventDefault()
      store.list.push(e.target.value)
      store.text = ''
      return
    }
  }

  render() {
    return (
      <div>
        <h2>React + Mobx</h2>
        <input
          type="text"
          placeholder="add to list"
          value={store.text}
          onKeyPress={this.addToList}
          onChange={e => (store.text = e.target.value)}
        />
        <h4>My List</h4>
        <ul>{store.list.map((item, index) => <li key={index}>{item}</li>)}</ul>
      </div>
    )
  }
}
