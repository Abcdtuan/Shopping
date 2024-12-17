import React from 'react';
import { Form, Input, Button, Select, Radio, Card, Typography } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';

const { Title } = Typography;
const { Option } = Select;

const CheckoutForm = () => {
  return (
    <div style={{ maxWidth: 500, margin: '0 auto', padding: '10px' }}>
      <Card style={{ padding: '10px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
        <Title level={4} style={{ fontSize: '16px', marginBottom: '10px' }}>Thông tin thanh toán</Title>
        <Form layout="vertical">
          
          <Form.Item label="Họ và tên" name="name" style={{ marginBottom: '12px' }}>
            <Input placeholder="Nhập họ và tên" size="big" />
          </Form.Item>
          
          <div style={{ display: 'flex', gap: '10px' }}>
            <Form.Item label="Email" name="email" style={{ flex: 1, marginBottom: '12px' }}>
              <Input placeholder="Nhập email" size="big" />
            </Form.Item>
            <Form.Item label="Điện thoại" name="phone" style={{ flex: 1, marginBottom: '12px' }}>
              <Input placeholder="Nhập số điện thoại" size="big" />
            </Form.Item>
          </div>
         
          <Form.Item label="Địa chỉ" name="address" style={{ marginBottom: '12px' }}>
            <Input placeholder="Nhập địa chỉ" size="big" />
          </Form.Item>
          
          <div style={{ display: 'flex', gap: '10px' }}>
            <Form.Item label="Tỉnh/Thành phố" style={{ flex: 1, marginBottom: '12px' }}>
              <Select placeholder="Chọn tỉnh thành" size="big">
                <Option value="hcm">Hồ Chí Minh</Option>
                <Option value="hn">Hà Nội</Option>
              </Select>
            </Form.Item>
            <Form.Item label="Quận/Huyện" style={{ flex: 1, marginBottom: '12px' }}>
              <Select placeholder="Chọn quận/huyện" size="big">
                <Option value="q1">Quận 1</Option>
                <Option value="q2">Quận 2</Option>
              </Select>
            </Form.Item>
            <Form.Item label="Phường/Xã" style={{ flex: 1, marginBottom: '12px' }}>
              <Select placeholder="Chọn phường/xã" size="big">
                <Option value="ward1">Phường 1</Option>
                <Option value="ward2">Phường 2</Option>
              </Select>
            </Form.Item>
          </div>
          
          <Title level={5} style={{ fontSize: '14px', marginBottom: '8px' }}>Phương thức thanh toán</Title>
          <Form.Item style={{ marginBottom: '12px' }}>
            <Radio.Group defaultValue="cod">
              <Radio value="cod">
                <ShoppingCartOutlined style={{ marginRight: 6 }} />
                Thanh toán khi giao hàng (COD)
              </Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item style={{ height: "20px"}}>
            <Button type="primary" htmlType="submit" block size="big">
              Đặt hàng
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default CheckoutForm;
