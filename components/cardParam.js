import React, { Fragment } from 'react'
import { Row, Col, Typography, Card, Button } from 'antd'

const { Title } = Typography
const { Text } = Typography

const CardParam = props => {
  return (
    <Card style={{ margin: '1rem' }} title={props.title}>
      <Row type="flex" justify="center">
        <Text style={{ fontSize: '3rem' }} id="break-length">
          {props.num}
        </Text>
      </Row>

      <Row type="flex" justify="center">
        <Col span={6} className="col">
          <Button
            id="break-decrement"
            type="dashed"
            shape="circle"
            icon="minus"
          />
        </Col>

        <Col span={6} className="col">
          <Button
            id="break-increment"
            type="dashed"
            shape="circle"
            icon="plus"
          />
        </Col>
      </Row>
    </Card>
  )
}

export default CardParam
