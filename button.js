import React from 'react'
import {Button} from 'antd'
import 'antd/dist/antd.css';

export default ({ btnName }) => {
  return (
    <Button>
      {btnName}
    </Button>
  )
}