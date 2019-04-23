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
      : this.setState({ sessionTime: this.state.sessionTime -= 1 })
      :null
     



    console.log('in handleClick')
    console.log('event => ', event.target.value)
    console.log('etat => ', event.target.getAttribute('etat'))
  }

  render() {
    return (
      <div className="hero">
        <Title title="Fcc Pomodoro Clock" />
        <div className="has-text-centered">
          <div>
            <Button btnName='addSessionTime' action={this.handleClick} value='add' etat='sessionTime' />
            <Button btnName='subSessionTime' action={this.handleClick} value='sub' etat='sessionTime' />
          </div>
          <h2 className="subtitle">
            {this.state.sessionTime}
          </h2>

          <div>
            <Button btnName='addBreakTime' action={this.handleClick} value='add' etat='breakTime' />
            <Button btnName='subBreakTime' action={this.handleClick} value='sub' etat='breakTime' />
          </div>
          <h2 className="subtitle has-text-centered">
            {this.state.breakTime}
          </h2>
        </div>
      </div>
    );
  }
}