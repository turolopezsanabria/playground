/* eslint-disable no-console */
import React from 'react'
import ReactDOM from 'react-dom'
import Hello from './Hello'

const render = Component =>
  ReactDOM.render(<Component />, document.getElementById('root'))

render(Hello)
