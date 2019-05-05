import React, { Component, Fragment } from 'react'
import Title from './title'
import Button from './button'
import BtnPlay from './btnPlay'
import Count from './count'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sessionTime: 25,
      breakTime: 5,
      time: 1000,
      second: Math.round(990 / 16.67)
    }
  }

  handleClick = (event) => {
    event.target.getAttribute('etat') === 'sessionTime' ?
      event.target.value === 'add' ?
        this.setState({ sessionTime: this.state.sessionTime += 1 })
        : this.state.sessionTime > 1 ?
          this.setState({ sessionTime: this.state.sessionTime -= 1 })
          : null
      : event.target.value === 'add' ?
        this.setState({ breakTime: this.state.breakTime += 1 })
        : this.state.breakTime > 1 ?
          this.setState({ breakTime: this.state.breakTime -= 1 })
          : null

    console.log('in handleClick')
    console.log('event => ', event.target.value)
    console.log('etat => ', event.target.getAttribute('etat'))
  }

  oneMinute = (event) => {
    while (this.state.time > 0) {
      setInterval(() => this.setState({ time: this.state.time -= 100 }), 100)
    }
    console.log('theEvent come', event)
    const time = this.state.sessionTime * 1000
    console.log('variable Time', this.state.time)
  }

  addOne = () => {
    console.log('addOneAction')
  }

  render() {
    return (
      <div className="hero">
        <div className="hero-body">
          <div className="container has-text-centered">
            <Title title="Fcc Pomodoro Clock" />
            <div className="has-text-centered">
              <div>
                <Button btnName='subSessionTime' action={this.handleClick} value='sub' etat='sessionTime' />
                <Button btnName='addSessionTime' action={this.handleClick} value='add' etat='sessionTime' />
                <Button btnName='newBtn' action={this.addOne} />
                <Count />
              </div>
              <h2 className="subtitle">
                {this.state.sessionTime}
              </h2>
            </div>

            <div className="has-text-centered">
              <div>
                <Button btnName='subBreakTime' action={this.handleClick} value='sub' etat='breakTime' />
                <Button btnName='addBreakTime' action={this.handleClick} value='add' etat='breakTime' />
              </div>
              <h2 className="subtitle has-text-centered">
                {this.state.breakTime}
              </h2>
            </div>
            <BtnPlay action={this.oneMinute} />
            <h2 className="subtitle has-text-centered">
              {this.state.second}
            </h2>
          </div>
        </div>
      </div>
    );
  }
}