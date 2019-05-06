import React, { Component, Fragment } from 'react'
import Title from './title'
import { Layout, Content, Row, Col, Button, Icon } from 'antd'
import 'antd/dist/antd.css';


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
      <Fragment>
        <Layout>
          <Content>
            <Row>
              <Col span={12} offset={6}>
                <Title title="Fcc Pomodoro Clock" />
              </Col>
            </Row>
          </Content>
        </Layout>
      </Fragment>
    );
  }
}