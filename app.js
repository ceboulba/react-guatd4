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
    this.addOne = this.addOne.bind(this)
  }

  addOne = () => {
    this.setState({time : this.state.time +=1 })
    // setInterv al( ()=>{alert('BOUM')}, 2500 )
  }

  render() {
    return (
      <Fragment>
        <div className="">
          <div>
            <h1>Pomodoro Clock
            </h1>
          </div>
        </div>
        <div>
        </div>
        <button type="button" onClick={this.addOne}>AddOne</button>
        <p>{this.state.time}</p>
      </Fragment>
    );
  }
}