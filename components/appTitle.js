import React from "react"
import { Card, Row, Col, Typography } from "antd"

const { Text } = Typography
const { Title } = Typography

const AppTitle = props => {
  return (
    <Row type="flex" justify="center" style={{ margin: "2rem" }}>
      <Col>
        <Title>Free Code Camp Pomodoro Clock</Title>
      </Col>
    </Row>
  )
}

export default AppTitle
