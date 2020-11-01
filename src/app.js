/* eslint-disable no-console */
import React from 'react'
import ReactDOM from 'react-dom'
import NavBar from './NavBar'

const render = Component =>
  ReactDOM.render(<Component />, document.getElementById('root'))

render(NavBar)
