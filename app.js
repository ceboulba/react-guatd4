import React, { Component, Fragment } from 'react'
// import { Header, Layout, Content, Row, Col } from 'antd'
import Title from './title'
import 'antd/dist/antd.css';
import { Button, Icon, Layout, Row, Col } from 'antd';

const {
  Header, Footer, Sider, Content
} = Layout;


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sessionTime: 25,
      breakTime: 5,
    }
  }



  render() {
    return (
      <Fragment>
        <Row className="ant-row">
          <Col className="ant-col ant-col-12">
            <h1 className='ant-typography ant-typography-danger'>Pomodoro Clock</h1>
          </Col>
          <Col className="ant-col ant-col-6">
            <h1 className='ant-typography ant-typography-danger'>Pomodoro Clock</h1>
          </Col>
          <Col className="ant-col ant-col-3">
            <h1 className='ant-typography ant-typography-danger'>Pomodoro Clock</h1>
          </Col>
        </Row>
        <Row>
      <Col span={12} offset={6}>
        col-12 col-offset-6
      </Col>
    </Row>
      </Fragment>
    );
  }
}