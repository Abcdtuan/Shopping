import { Col } from 'antd'
import React from 'react'
import { WrapperHeader, WrapperHeaderAccount, WrapperTextHeader, WrapperHeaderCart, WrapperCart, } from './style'
import {
  UserOutlined,
  DownOutlined,
  ShoppingCartOutlined
} from '@ant-design/icons';
import ButtonSearch from '../ButtonSearch/ButtonSearch';

const HeaderComponent = () => {
  return (
    <div >
      <WrapperHeader gutter={50}>
      <Col span={6}>
        <WrapperTextHeader>ClothingShopping</WrapperTextHeader>
      </Col>
      <Col span={12}>
      <ButtonSearch
        placeholder="Tìm kiếm sản phẩm ..."
        size='large'
        textbutton='Tìm kiếm'
      
    />
      </Col>
      <Col span={6} style={{ display: 'flex', gap: '40px'}}>
      <WrapperHeaderAccount>
        <UserOutlined style={{ fontSize: '30px' }} />
      <div>
        <WrapperHeaderCart>Đăng Nhập/Đăng Ký</WrapperHeaderCart>
          <div>
            <WrapperHeaderCart>Tài Khoản</WrapperHeaderCart>
            <DownOutlined backgoundlo />
          </div>
      </div>
        </WrapperHeaderAccount>
        <WrapperCart >
          
          <ShoppingCartOutlined style={{ fontSize: '30px', color: '#fff' }} />
          <WrapperHeaderCart>Giỏ Hàng</WrapperHeaderCart>
        </WrapperCart>
      </Col>
      </WrapperHeader>
      
    </div>
  )
}

export default HeaderComponent