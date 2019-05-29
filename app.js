import React, { Component, Fragment } from "react"
import { Card, Button, Row, Col, Typography } from "antd"

const { Title } = Typography
const { Text } = Typography

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
    this.reset = this.reset.bind(this)
  }

  reset(event) {
    event.preventDefault()
    this.setState({
      sessionLength: 25,
      breakLength: 5,
    })
  }

  render() {
    return (
      <div>
        <Row type="flex" justify="center">
          <Title level={2}>Free Code Camp Pomodoro Clock</Title>
        </Row>

        <Row>
          <Row type="flex" justify="center">
            <Title level={3} id="break-label">
              break length
            </Title>
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
            <Title level={3} id="session-label">
              session label
            </Title>
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
              <Button
                id="reset"
                type="dashed"
                shape="round"
                onClick={this.reset}
              >
                RESET
              </Button>
            </Col>
          </Row>
        </div>
      </div>
    )
  }
}
