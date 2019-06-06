import React, { Component, Fragment } from 'react'
import { Card, Button, Row, Col, Typography } from 'antd'
import AppName from './components/appName'
import CardParam from './components/cardParam'
import TimerSecond from './components/timerSecond'
import Paragraph from 'antd/lib/skeleton/Paragraph'

const { Title } = Typography
const { Text } = Typography

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      sessionLength: 25,
      breakLength: 5,
      elapsedTime: 25,
      etat: false,
    }

    this.reset = this.reset.bind(this)
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
  // tick(event) {
  //   this.state.elapsedTime > 0
  //     ? this.setState({ elapsedTime: (this.state.elapsedTime -= 1) })
  //     : clearInterval(this.play)
  // }

  play() {
    this.myInterval = setInterval(() => {
      this.state.elapsedTime > 0
        ? this.setState({ elapsedTime: (this.state.elapsedTime -= 1) })
        : clearInterval(this.myInterval)
    }, 1000)
    this.setState({ etat: true })
  }

  stop() {
    clearInterval(this.myInterval)
    this.setState({ etat: false })
  }

  //remise à zéro des compteurs
  reset(event) {
    event.preventDefault()
    //this.stop()
    clearInterval(this.myInterval)
    this.setState({
      sessionLength: 25,
      breakLength: 5,
      elapsedTime: this.state.sessionLength,
    })
  }

  render() {
    return (
      <Fragment>
        <AppName />
        <Row gutter={25}>
          <Col span={12}>
            <CardParam
              title="Break length"
              titleId="break-length"
              num={this.state.breakLength}
              quoi="breakLength"
              addTime={() => {
                this.state.breakLength < 60
                  ? this.setState({
                      breakLength: (this.state.breakLength += 1),
                    })
                  : null
              }}
              subTime={() => {
                this.state.breakLength > 1
                  ? this.setState({
                      breakLength: (this.state.breakLength -= 1),
                    })
                  : null
              }}
            />
          </Col>
          <Col span={12}>
            <CardParam
              title="Session length"
              id="session-length"
              num={this.state.sessionLength}
              quoi="sessionLength"
              addTime={() => {
                this.state.sessionLength < 60
                  ? this.setState({
                      sessionLength: (this.state.sessionLength += 1),
                    })
                  : null
              }}
              subTime={() => {
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
          <Col span={6} style={{ textAlign: 'center' }}>
            <Text style>Session</Text>
            <TimerSecond second={this.state.sessionLength} />
            <Card>
              <Row>
                <Col />
              </Row>
              <Row>
                <Col>
                  <Text
                    style={{ fontSize: '2rem', fontWeight: 'bold' }}
                    level={1}
                    id="time-left">
                    {this.state.elapsedTime}
                  </Text>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>

        <Row type="flex" justify="center" style={{ textAlign: 'center' }}>
          <Col span={8}>
            <Button
              id="start_stop"
              type="dashed"
              shape="round"
              onClick={this.state.etat === false ? this.play : this.stop}>
              play/pause
            </Button>
          </Col>
          <Col span={8}>
            <Text id="timer-label" style={{ fontSize: '2rem' }}>
              {this.state.etat === true ? 'running' : 'stopped'}
            </Text>
          </Col>
          <Col span={8}>
            <Button id="reset" type="dashed" shape="round" onClick={this.reset}>
              Reset
            </Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button onClick={this.play}>PLAY</Button>
          </Col>
          <Col>
            <Button onClick={this.stop}>PAUSE</Button>
          </Col>
        </Row>
      </Fragment>
    )
  }
}
