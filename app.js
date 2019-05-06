import React, { Component, Fragment } from 'react'
import Title from './title'
import BtnPlay from './btnPlay'
import Count from './count'
import { Button, Drawer, Icon } from 'antd'
import 'antd/dist/antd.css';


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
  event.preventDefault()
  console.log(event.currentTarget.dataset)
  this.setState( { sessionTime : this.state.sessionTime += 1})
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

   showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };

  render() {
    return (
      <div className="hero">
        <div className="hero-body">
          <div className="container has-text-centered">
            <Drawer
              title="Basic Drawer"
              placement={this.state.placement}
              closable={false}
              onClose={this.onClose}
              visible={this.state.visible}
            >
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
            </Drawer>
            <Title title="Fcc Pomodoro Clock" />
            <div className="has-text-centered">
              <div>
                <Button type='primary' etat='sessionTime' onClick={this.showDrawer}>
                  bim
                </Button>
                <Button btnName='addSessionTime' action={this.handleClick} value='add' etat='sessionTime' />
                <Button btnName='newBtn' action={this.addOne} />
                <Count />
              </div>
            </div>
            <div>
            <span onClick={this.handleClick} quoi="LaData">
            <Icon type="plus-circle"/>
            </span>
              <p className="subtitle is-inline" style={{margin:'1em'}}>
                {this.state.sessionTime}
              </p>
            <Icon type="minus-circle" />
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