import { Button } from 'antd'
import React from 'react'
import { SearchOutlined } from'@ant-design/icons';

const ButtonComponent = ({ size, textbutton }) => {
  return (
    <Button size= {size} 
        icon= {<SearchOutlined />}>
        <span>{textbutton}</span>
    </Button>
  )
}

export default ButtonComponent