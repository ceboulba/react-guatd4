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
      timerLabel: "Off",
      seconds: 60,
      timeLeft: 100,
      time: 0,
      etat: "Start",
      on: false,
    }
    this.reset = this.reset.bind(this)
    this.tick = this.tick.bind(this)
    this.handleTimerLabel = this.handleTimerLabel.bind(this)
    this.play = this.play.bind(this)
    this.stop = this.stop.bind(this)
  }

  //handle timerLabel
  handleTimerLabel() {
    this.state.etat === "Start"
      ? this.setState({ etat: "Pause" })
      : this.setState({ etat: "Start" })
  }

  //Tick Every 1 second
  tick(event) {
    this.state.time < this.state.sessionLength && this.state.etat === "Start"
      ? this.setState({ time: (this.state.time += 1) })
      : clearInterval(this.play)
  }

  play() {
    setInterval(this.tick, 1000)
    this.setState({ on: true })
  }

  stop() {
    clearInterval(this.play)
  }

  //remise à zéro des compteurs
  reset(event) {
    event.preventDefault()
    this.setState({
      sessionLength: 25,
      breakLength: 5,
      time: 0,
    })
  }

  componentWillUnmount() {
    clearInterval(this.tick)
  }

  render() {
    return (
      <Fragment>
        <Row type="flex" justify="center">
          <Title level={3} style={{ margin: "2rem" }}>
            Free Code Camp Pomodoro Clock
          </Title>
        </Row>

        <Row>
          <Col span={12}>
            <Card style={{ margin: "1rem" }} title="Break length">
              <Row type="flex" justify="center">
                <Title level={3} id="break-length">
                  {this.state.breakLength}
                </Title>
              </Row>
              <Row type="flex" justify="center">
                <Col span={6} className="col">
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
                <Col span={6} className="col">
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
            </Card>
          </Col>

          <Col span={12}>
            <Card style={{ margin: "1rem" }} title="Session label">
              <Row type="flex" justify="center">
                <Col>
                  <Title level={3} id="session-length">
                    {this.state.sessionLength}
                  </Title>
                </Col>
              </Row>
              <Row type="flex" justify="center">
                <Col span={6} className="col">
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
                <Col span={6} className="col">
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
              </Row>
            </Card>
          </Col>
        </Row>

        <Row type="flex" justify="center" gutter={16}>
          <Col>
            <Title level={2} id="timer-label">
              {this.state.timerLabel}
            </Title>
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
              onClick={() => {
                this.state.on === false ? this.play() : this.stop()
                this.handleTimerLabel()
              }}
            >
              {this.state.etat}
            </Button>
          </Col>
          <Col span={6}>
            <Button id="reset" type="dashed" shape="round" onClick={this.reset}>
              Reset
            </Button>
          </Col>
          <Title>{this.state.time}</Title>
        </Row>
      </Fragment>
    )
  }
}
