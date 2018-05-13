import React from 'react'
import { render } from 'react-dom'
import { configure } from 'mobx'
import App from './components/App/App.component'

configure({ enforceActions: true })

render(<App />, document.getElementById('root'))
