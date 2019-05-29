import React, { Component, Fragment } from 'react'
import Title from './title'
import { Card, Button, Row, Col } from 'antd'

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

  this.timer = () => {
    console.log('this = ', this)
  }

  render() {
    return (
      <Fragment>
        <div className="ant-layout">
          <div className="ant-layout-header">
            <Title title="pomodoro Clock" />
          </div>
          <div className="ant-layout-content">
            <div className="container">
              <div id="break-label" className="ant-typography">
                break length
              </div>
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

            <div id="session-label" className="ant-typography">
              session label
            </div>
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
            <Button id="start_stop" type="dashed" shape="round">
              START
            </Button>
            <Button id="reset" type="dashed" shape="round">
              RESET
            </Button>
          </div>
        </div>
      </Fragment>
    )
  }
}
