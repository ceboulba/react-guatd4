import React, { Fragment } from 'react'
import { Row, Col, Typography } from 'antd'

const { Title } = Typography
const { Text } = Typography

const AppName = props => {
  return (
    <Fragment>
      <Row
        type="flex"
        justify="center"
        style={{
          margin: '3rem',
        }}>
        <Col>
          <Title>Free Code Camp Pomodoro Clock</Title>
        </Col>
      </Row>
    </Fragment>
  )
}

export default AppName
