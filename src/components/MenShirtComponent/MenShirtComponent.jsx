import React from 'react'
import { StyleNameProduct, WrapperPrice } from './style'
import { Card } from 'antd'

const MenShirtComponent = () => {
  return (
    <Card
    hoverable
    style={{ width: 437, height: 537, }}
    cover={<img alt="example" src="https://levents.asia/cdn/shop/files/LightBlue_LHZBXCLE101UB0202FW24_1.jpg?v=1729511098&width=437" />}
>
  <div >
    <StyleNameProduct>
    “WHENEVER" BASIC T-SHIRT
    </StyleNameProduct>
    <WrapperPrice>420.000 VNĐ</WrapperPrice>
  </div> 
    
</Card>
  )
}

export default MenShirtComponent