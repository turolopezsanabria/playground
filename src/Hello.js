import React, {Component} from 'react'
import './index.scss'
import Button from '@s-ui/react-atom-button'

export default class Hello extends Component {
  render() {
    return (
      <div className="App">
        <p>
          The background is grey just to make sure I know the SCSS file is
          loading
        </p>
        <Button>Hello</Button>
      </div>
    )
  }
}
