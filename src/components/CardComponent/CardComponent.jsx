import { Card } from 'antd'
import { StyleNameProduct, WrapperPrice } from './style'
import React from 'react'

const CardComponent = () => {
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
  );
};

export default CardComponent