import React, { Component, Fragment } from 'react'
// import { Header, Layout, Content, Row, Col } from 'antd'
import Title from './title'
import 'antd/dist/antd.css';
import { Button, Icon, Layout, Row, Col } from 'antd';



export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sessionTime: 25,
      breakTime: 5,
      time: 0
    }
  }

  // addOne = s  etInterval( ()=>{alert('f')}, 2500)



  render() {
    return (
      <Fragment>
        <Row className="ant-row">
          <Col className="ant-col ant-col-3">
            <h1 className='ant-typography ant-typography-danger'>Pomodoro Clock</h1>
          </Col>
        </Row>
        <Row>
        </Row>
        <button className="button" onClick={}>AddOne</button>
        <p>{this.state.time}</p>
      </Fragment>
    );
  }
}