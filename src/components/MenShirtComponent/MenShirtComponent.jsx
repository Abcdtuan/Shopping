import { Card } from 'antd'
import { StyleNameProduct, WrapperPrice } from './style'
import React from 'react'

const CardComponent = ({poster_url, name_card, price}) => {
  return (
    <Card
        hoverable
        style={{ width: 437, height: 537, }}
        cover={<img alt="example" src={poster_url} />}
    >
      <div >
        <StyleNameProduct>
        {name_card}
        </StyleNameProduct>
        <WrapperPrice>{price} VNĐ</WrapperPrice>
      </div> 
        
  </Card>
  );
};

export default CardComponent