import React, {Component} from 'react'
import './index.scss'
import Button from '@s-ui/react-atom-button'

export default class Hello extends Component {
  render() {
    return (
      <div className="App">
        <div className="main">
          <div className="header">
            <img className="logo" src="img/logo.svg" />
            <div className="actions">
              {/* <Button size="small" color="neutral">
                Menu
              </Button> */}
              <Button
                color="neutral"
                className="sui-AtomButton--empty"
              >
                <img src="img/burger.svg"/>
              </Button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}