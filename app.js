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
      elapsedTime: '25:00',
      etat: 'Off',
    }

    this.reset = this.reset.bind(this)
    this.tick = this.tick.bind(this)
    this.handleTimerLabel = this.handleTimerLabel.bind(this)
    this.play = this.play.bind(this)
    this.stop = this.stop.bind(this)
  }

  //handle timerLabel
  handleTimerLabel() {
    this.state.etat === 'Start'
      ? this.setState({ etat: 'Pause' })
      : this.setState({ etat: 'Start' })
  }

  //Tick Every 1 second
  tick(event) {
    this.state.time < this.state.sessionLength && this.state.etat === 'Start'
      ? this.setState({ time: (this.state.time += 1) })
      : clearInterval(this.play)
  }

  play() {
    setInterval(this.tick, 1000)
    this.setState({ etat: 'Pause' })
  }

  stop() {
    clearInterval(this.play)
  }

  //remise à zéro des compteurs
  reset(event) {
    event.preventDefault()
    //this.stop()
    this.setState({
      sessionLength: 25,
      breakLength: 5,
      elapsedTime: '25:00',
    })
  }

  // componentWillUnmount() {
  //   clearInterval(this.tick)
  // }

  render() {
    return (
      <Fragment>
        <Row type="flex" justify="center">
          <Title level={3} style={{ margin: '2rem' }}>
            Free Code Camp Pomodoro Clock
          </Title>
        </Row>

        <Row>
          <Col span={12}>
            <Card
              style={{ margin: '1rem' }}
              title="Break length"
              id="break-label">
              <Row type="flex" justify="center">
                <Title level={3} id="break-length">
                  {this.state.breakLength}
                </Title>
              </Row>
              <Row type="flex" justify="center">
                <Col span={6} className="col">
                  <Button
                    id="break-decrement"
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
                    id="break-increment"
                    type="dashed"
                    shape="circle"
                    icon="plus"
                    onClick={event => {
                      this.state.breakLength < 60
                        ? this.setState({
                            breakLength: (this.state.breakLength += 1),
                          })
                        : null
                    }}
                  />
                </Col>
              </Row>
            </Card>
          </Col>

          <Col span={12}>
            <Card
              style={{ margin: '1rem' }}
              title="Session label"
              id="session-label">
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
                    id="session-decrement"
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
                    id="session-increment"
                    type="dashed"
                    shape="circle"
                    icon="plus"
                    onClick={event => {
                      this.state.sessionLength < 60
                        ? this.setState({
                            sessionLength: (this.state.sessionLength += 1),
                          })
                        : null
                    }}
                  />
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>

        <Row type="flex" justify="center">
          <Col>
            <Title level={4} id="time-left">
              {this.state.elapsedTime}
            </Title>
          </Col>
        </Row>

        <Row type="flex" justify="center">
          <Col span={6} className="col">
            <Button
              id="start_stop"
              type="dashed"
              shape="round"
              onClick={() => {
                this.state.etat === 'Off'
                  ? console.log('FeuVert')
                  : console.log('FeuRouge')
              }}>
              {this.state.etat}
            </Button>
          </Col>
          <Col span={6} className="col">
            <Button id="reset" type="dashed" shape="round" onClick={this.reset}>
              Reset
            </Button>
          </Col>
          <Col>
            <Text id="timer-label">{this.state.etat}</Text>
          </Col>
        </Row>
      </Fragment>
    )
  }
}
