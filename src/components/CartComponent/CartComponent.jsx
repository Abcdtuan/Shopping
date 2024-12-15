import React from 'react'
import { Card, Button, InputNumber, Divider } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import { Coupon, ProductInfo, ProductName, Total } from './Style';

const CartComponent = () => {
  return (
    <div style={{ maxWidth: 600, margin: '0 auto', padding: 16 }}>
      
      <Card style={{ marginBottom: 16 }}>
        <div style={{ display: 'flex' }}>
          <img
            src="https://levents.asia/cdn/shop/files/Tan_LTSSOCOA420UT0400FW24_1.jpg?v=1729691307&width=473"
            alt="Tee"
            style={{ width: 120, marginRight: 16 }}
          />
          <div>
            <ProductName>Levents® My Garden Semi-Oversize Tee/Tan</ProductName>
            <ProductInfo>Giá: 420.000₫</ProductInfo>
            <ProductInfo>Size: 3</ProductInfo>
            <ProductInfo>Màu: Trắng</ProductInfo>
            <div style={{ marginTop: 8 }}>
              Số lượng: <InputNumber min={1} defaultValue={1} style={{ marginLeft: 8 }} />
            </div>
            <Button
              type="text"
              danger
              icon={<DeleteOutlined />}
              style={{ marginTop: 8 }}
            >
              Xóa
            </Button>
          </div>
        </div>
      </Card>

      <Card style={{ marginBottom: 16 }}>
        <div style={{ display: 'flex' }}>
          <img
            src="https://levents.asia/cdn/shop/files/Black_LHOBXCLD132UD0102FW24_1.jpg?v=1732699435&width=437"
            alt="Hoodie"
            style={{ width: 120, marginRight: 16 }}
          />
          <div>
            <ProductName>Levents® Classic Authentic Hoodie Boxy 2.0</ProductName>
            <ProductInfo>Giá: 620.000₫</ProductInfo>
            <ProductInfo>Size: 4</ProductInfo>
            <ProductInfo>Màu: Đen</ProductInfo>
            <div style={{ marginTop: 8 }}>
              Số lượng: <InputNumber min={1} defaultValue={1} style={{ marginLeft: 8 }} />
            </div>
            <Button
              type="text"
              danger
              icon={<DeleteOutlined />}
              style={{ marginTop: 8 }}
            >
              Xóa
            </Button>
          </div>
        </div>
      </Card>

      
      <Coupon>
        Coupon: <span style={{ color: 'green' }}>LVS15FREESHIP</span>
      </Coupon>

      <Divider />

     
      <Total>
        Thanh toán: 1.020.000₫
      </Total>
    </div>
  );

  
}

export default CartComponent