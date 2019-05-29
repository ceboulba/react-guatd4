import React, { Component, Fragment } from 'react'
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

  render() {
    return (
      <div>
        <Row type="flex" justify="center">
          <h1>Free Code Camp Pomodoro Clock</h1>
        </Row>

        <Row>
          <Row type="flex" justify="center">
            <div id="break-label">break length</div>
          </Row>

          <Row type="flex" justify="space-around">
            <Col>
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
            </Col>
            <Col>
              <Button
                id="break-decrement"
                type="dashed"
                shape="circle"
                icon="plus"
                onClick={event => {
                  this.setState({ breakLength: (this.state.breakLength += 1) })
                }}
              />
            </Col>
          </Row>

          <Row type="flex" justify="center">
            <p id="break-length">{this.state.breakLength}</p>
          </Row>
        </Row>

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

          <Row type="flex" justify="center">
            <Col span={6}>
              <Button id="start_stop" type="dashed" shape="round">
                START
              </Button>
            </Col>
            <Col span={6}>
              <Button id="reset" type="dashed" shape="round">
                RESET
              </Button>
            </Col>
          </Row>
        </div>
      </div>
    )
  }
}
