import React, { Fragment } from 'react'
import { Row, Col, Typography } from 'antd'

const { Title } = Typography
const { Text } = Typography

const AppName = props => {
  return (
    <Row
      type="flex"
      justify="center"
      style={{
        margin: '3rem',
        textAlign: 'center',
      }}>
      <Col>
        <Title
          style={{
            fontSize: 'rem',
          }}>
          Free Code Camp Pomodoro Clock
        </Title>
      </Col>
    </Row>
  )
}

export default AppName
