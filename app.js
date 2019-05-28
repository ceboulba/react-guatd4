import React, { Component, Fragment } from "react"
import Title from "./title"
import { Card, Button, Row, Col } from "antd"

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      sessionLength: 25,
      breakLength: 5,
      time: 0,
      timerLabel: ["ON", "OFF"],
      seconds: 60,
      timeLeft: 100,
    }
  }

  render() {
    return (
      <Fragment>
        <div className="ant-layout">
          <div className="ant-layout-header">
            <Title title="pomodoro Clock" />
          </div>
          <div className="ant-layout-content">
            <div id="break-label" className="ant-typography">
              break length
            </div>
            <Button
              id="break-decrement"
              type="dashed"
              shape="circle"
              icon="plus"
            />
            <Button
              id="break-increment"
              type="dashed"
              shape="circle"
              icon="minus"
            />
            <div id="session-label" className="ant-typography">
              session label
            </div>
            <Button
              id="session-decrement"
              type="dashed"
              shape="circle"
              icon="plus"
            />
            <Button
              id="session-increment"
              type="dashed"
              shape="circle"
              icon="minus"
            />
            <p id="break-length">{this.state.breakLength}</p>
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
