import React, { Fragment } from 'react'
import { Typography } from 'antd'

const { Title } = Typography
const { Text } = Typography

const TimerSecond = props => {
  const minutes = '25'
  const second = '00'
  return (
    <Fragment>
      <Title>
        {minutes}:{second}
      </Title>
    </Fragment>
  )
}

export default TimerSecond
