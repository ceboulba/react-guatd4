import React, { Component, Fragment } from 'react'
import Title from './title'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sessionTime: '25',
      breakTime: '5'
    }
  }

  render() {
    return (
      <div className="hero">
        <Title title="Fcc Pomodoro Clock" />
      </div>
    );
  }
}