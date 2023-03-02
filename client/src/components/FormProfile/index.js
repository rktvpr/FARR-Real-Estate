import React from 'react';
import { Card, Input, Button, Form, message } from 'antd';
import { UserOutlined, MailOutlined, PhoneOutlined, EnvironmentOutlined } from '@ant-design/icons';

export default function FormProfile(props){
    return (
        <Form onSubmit={props.handleSubmit}>
              <Form.Item label="Username">
                <Input prefix={<UserOutlined />} name="username" value={props.formData.username || props.user.username} onChange={props.handleChange} />
              </Form.Item>
              <Form.Item label="Email">
                <Input prefix={<MailOutlined />} name="email" value={props.formData.email || props.user.email} onChange={props.handleChange} />
              </Form.Item>
              <Form.Item label="Phone">
                <Input prefix={<PhoneOutlined />} name="phone" value={props.formData.phone || props.user.phone} onChange={props.handleChange} />
              </Form.Item>
              <Form.Item label="Address">
              <Input prefix={<EnvironmentOutlined />} name="address" value={props.formData.address || props.user.address} onChange={props.handleChange} />
              </Form.Item>
              {props.mutationError}
              <Button type="submit" onClick={props.handleSubmit} htmlType="submit">Save Changes</Button>
              </Form>
    )
}