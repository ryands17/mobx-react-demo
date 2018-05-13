import React, { Component } from 'react'
import { observer } from 'mobx-react'
import store from './App.store'

@observer
export default class App extends Component {
  render() {
    return (
      <div>
        <h2>React + Mobx</h2>
        <input
          type="text"
          placeholder="add to list"
          value={store.text}
          onKeyPress={store.addToList}
          onChange={store.onTextChange}
        />
        <h4>My List</h4>
        <ul>{store.list.map((item, index) => <li key={index}>{item}</li>)}</ul>
      </div>
    )
  }
}
