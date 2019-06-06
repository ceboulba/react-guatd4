import React, { Fragment } from 'react'
import { Row, Col, Typography, Card, Button } from 'antd'

const { Title } = Typography
const { Text } = Typography
const { Paragraph } = Typography

const CardParam = props => {
  return (
    <Fragment>
      <Card
        style={{ margin: '1rem' }}
        title={props.title}
        id={props.id}
        style={{ textAlign: 'center' }}>
        <Title style={{ fontSize: '3rem', margin: 0 }} id={props.titleId}>
          {props.num}
        </Title>
        <Button
          type="dashed"
          shape="circle"
          icon="minus"
          style={{
            margin: '0 1em',
          }}
          onClick={props.subTime}
        />
        <Button
          type="dashed"
          shape="circle"
          icon="plus"
          style={{
            margin: '0 1em',
          }}
          onClick={props.addTime}
        />
      </Card>
    </Fragment>
  )
}

export default CardParam
