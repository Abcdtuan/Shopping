import React from 'react';
import { Card, Form, Input, Button, Avatar, Typography } from 'antd';
import { UserOutlined, CheckCircleTwoTone } from '@ant-design/icons';

const { Title, Text } = Typography;

const AccountComponent = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px',}}>
      <Card style={{ width: 500, textAlign: 'center', borderRadius: '10px', }}>
        <Avatar size={80} icon={<UserOutlined />} />
        <CheckCircleTwoTone twoToneColor="#52c41a" style={{ fontSize: '20px', marginLeft: '5px' }} />
        <Title level={4} style={{ marginTop: '5px' }}>Tuấn</Title>
        <Text type="">tuancoc210124@gmail.com</Text>
        
        <div style={{ display: 'flex', justifyContent: 'space-around', margin: '10px 0' }}>
          <div>
            <Title level={5}>0 Đơn hàng</Title>
            <Text>Giao thành công</Text>
          </div>
          <div>
            <Title level={5}>0</Title>
            <Text>Voucher</Text>
          </div>
          <div>
            <Title level={5}>Member</Title>
            <Text>Membership</Text>
          </div>
        </div>

        
        <Form layout="vertical">
          <Form.Item label="Họ và tên">
            <Input defaultValue="Tuấn" />
          </Form.Item>
          <Form.Item label="Email">
            <Input defaultValue="tuancoc210124@gmail.com" disabled />
          </Form.Item>
          <Form.Item label="Số điện thoại">
            <Input defaultValue="+84989400954" />
          </Form.Item>
          <Form.Item label="Ngày sinh">
            <Input defaultValue="21/01/2005" />
          </Form.Item>
        </Form>

        <Button type='primary' danger block>
          Đăng Xuất
        </Button>
      </Card>
    </div>
  );
};

export default AccountComponent;
