import React, { Component, Fragment } from 'react'
import { Card, Button, Row, Col, Typography } from 'antd'

const { Title } = Typography
const { Text } = Typography

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
      time: 0,
    }
    this.reset = this.reset.bind(this)
    this.tick = this.tick.bind(this)
  }

  //Tick Every 1 second
  tick(event) {
    // event.preventDefault()
    this.state.time < 3
      ? setInterval(() => {
          this.setState({ time: (this.state.time += 1) })
        }, 1000)
      : null
  }

  //remise à zéro des compteurs
  reset(event) {
    event.preventDefault()
    this.setState({
      sessionLength: 25,
      breakLength: 5,
    })
  }

  render() {
    return (
      <Fragment>
        <Row type="flex" justify="center">
          <Title level={2}>Free Code Camp Pomodoro Clock</Title>
        </Row>

        <Row>
          <Row type="flex" justify="center">
            <Title level={3} id="break-label">
              Break length
            </Title>
          </Row>

          <Row type="flex" justify="center">
            <Col span={4} className="col">
              <Button
                id="break-increment"
                type="dashed"
                shape="circle"
                icon="minus"
                onClick={event => {
                  this.state.breakLength > 1
                    ? this.setState({
                        breakLength: (this.state.breakLength -= 1),
                      })
                    : null
                }}
              />
            </Col>
            <Col span={4} className="col">
              <Button
                id="break-decrement"
                type="dashed"
                shape="circle"
                icon="plus"
                onClick={event => {
                  this.setState({
                    breakLength: (this.state.breakLength += 1),
                  })
                }}
              />
            </Col>
          </Row>

          <Row type="flex" justify="center">
            <Title level={3} id="break-length">
              {this.state.breakLength}
            </Title>
          </Row>
        </Row>

        <Row type="flex" justify="center">
          <Title level={3} id="session-label">
            Session label
          </Title>
        </Row>

        <Row type="flex" justify="center">
          <Col span={4} className="col">
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
          </Col>
          <Col span={4} className="col">
            <Button
              id="session-increment"
              type="dashed"
              shape="circle"
              icon="minus"
              onClick={event => {
                this.state.sessionLength > 1
                  ? this.setState({
                      sessionLength: (this.state.sessionLength -= 1),
                    })
                  : null
              }}
            />
          </Col>
        </Row>
        <Row type="flex" justify="center">
          <Col>
            <Title level={3} id="session-length">
              {this.state.sessionLength}
            </Title>
          </Col>
        </Row>
        <Row type="flex" justify="center" gutter={16}>
          <Col>
            <p id="timer-label">{this.state.timerLabel[0]}</p>
          </Col>
          <Col>
            <p id="timer-left">{Math.floor(this.state.seconds * 1.667)}</p>
          </Col>
          <Col>
            <p id="time-left">{this.state.timeLeft}</p>
          </Col>
        </Row>

        <Row type="flex" justify="center">
          <Col span={6}>
            <Button
              id="start_stop"
              type="dashed"
              shape="round"
              onClick={this.tick}>
              START
            </Button>
          </Col>
          <Col span={6}>
            <Button id="reset" type="dashed" shape="round" onClick={this.reset}>
              RESET
            </Button>
          </Col>
          <Title>{this.state.time}</Title>
        </Row>
      </Fragment>
    )
  }
}
