import React, { Component, Fragment } from 'react'
import Title from './title'


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sessionTime: 25,
      breakTime: 5,
      time: 0
    }
  }

  render() {
    return (
      <Fragment>
        <div className="ant-row">
          <div className="ant-col ant-col-3">
            <h1 className='ant-typography ant-typography-danger'>Pomodoro Clock
            </h1>
          </div>
        </div>
        <div>
        </div>
        <button type="button" className="ant-btn" onClick={}>AddOne</button>
        <p>{this.state.time}</p>
      </Fragment>
    );
  }
}