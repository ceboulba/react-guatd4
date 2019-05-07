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

  handleClick = (event) => {
    event.preventDefault()
    console.log(event)
  }

  render() {
    return (
      <div>
        <Layout>
          <Row>
            <Col span={12} offset={6}>
              <Title title='Pomodoro Clock' />
            </Col>
          </Row>
          <Row>
            <Col>
              <Button type='primary' onClick={this.handleClick}>
                <Icon type="plus-circle" />
              </Button>
              <p>{this.state.sessionTime}</p>
              <Button ghost type='primary' onClick={this.handleClick}>
                <Icon type="minus-circle" />
              </Button>
            </Col>
            
          </Row>
        </Layout>
      </div>
    );
  }
}