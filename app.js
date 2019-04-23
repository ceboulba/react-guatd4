import React, { Component, Fragment } from 'react'
import Title from './title'
import Button from './button'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sessionTime: 25,
      breakTime: 5
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

  oneMinute = (second) => {

  }

  render() {
    return (
      <div className="hero">
        <div className="hero-body">
          <div className="container">
            <Title title="Fcc Pomodoro Clock" />
            <div className="has-text-centered">
              <div>
                <Button btnName='subSessionTime' action={this.handleClick} value='sub' etat='sessionTime' />
                <Button btnName='addSessionTime' action={this.handleClick} value='add' etat='sessionTime' />
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
          </div>
        </div>
      </div>
    );
  }
}