import React, { Component, Fragment } from 'react'
import { Layout, Content, Row, Col } from 'antd'
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
              <h1>title</h1>
              </Col>
            </Row>
          </Content>
        </Layout>
      </Fragment>
    );
  }
}