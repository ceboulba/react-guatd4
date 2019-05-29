import React, { Component, Fragment } from 'react'
import {
  Card,
  Button,
  Row,
  Col,
  Layout,
  Content,
  Header,
  Sider,
  Footer,
} from 'antd'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      sessionLength: 25,
      breakLength: 5,
      time: 0,
      timerLabel: ['ON', 'OFF'],
      seconds: 60,
      timeLeft: 100,
    }
  }

  render() {
    return (
      <div>
        <div>
          <div>
            <h1>Header</h1>
          </div>
          <div>
            <div id="break-label">break length</div>
            <Button
              id="break-decrement"
              type="dashed"
              shape="circle"
              icon="plus"
              onClick={event => {
                this.setState({ breakLength: (this.state.breakLength += 1) })
              }}
            />
            <Button
              id="break-increment"
              type="dashed"
              shape="circle"
              icon="minus"
              onClick={event => {
                this.state.breakLength > 0
                  ? this.setState({
                      breakLength: (this.state.breakLength -= 1),
                    })
                  : null
              }}
            />
            <p id="break-length">{this.state.breakLength}</p>
          </div>
        </div>

        <div>
          <div>
            <div id="session-label">session label</div>
            <Button
              id="session-decrement"
              type="dashed"
              shape="circle"
              icon="plus"
              onClick={event => {
                this.setState({
                  sessionLength: (this.state.sessionLength += 1),
                })
              }}
            />
            <Button
              id="session-increment"
              type="dashed"
              shape="circle"
              icon="minus"
              onClick={event => {
                this.state.sessionLength > 0
                  ? this.setState({
                      sessionLength: (this.state.sessionLength -= 1),
                    })
                  : null
              }}
            />
            <p id="session-length">{this.state.sessionLength}</p>
            <p id="timer-label">{this.state.timerLabel[0]}</p>
            <p id="timer-left">{Math.floor(this.state.seconds * 1.667)}</p>
            <p id="time-left">{this.state.timeLeft}</p>
          </div>
          <div>
            <div className="container">
              <Button id="start_stop" type="dashed" shape="round">
                START
              </Button>
              <Button id="reset" type="dashed" shape="round">
                RESET
              </Button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
