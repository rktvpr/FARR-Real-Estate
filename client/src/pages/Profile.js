import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useQuery } from '@apollo/client';
import { QUERY_USER } from '../utils/queries';
import { Card, Input, Button, Form } from 'antd';
import { UserOutlined, MailOutlined, PhoneOutlined, EnvironmentOutlined } from '@ant-design/icons';

const Profile = () => {
  const user = {
    name: 'John Doe',
    email: 'johndoe@gmail.com',
    phone: '555-555-5555',
    address: '123 Main St, Anytown, USA',
    image: '',
  };

  return (
    <>
      <Header />
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-3">
            <Card
              cover={<img src={user.image} alt={user.name} className="card-img-top" />}
            >
              <Card.Meta
                title={user.name}
                description={<>
                  <p>{user.email}</p>
                  <p>{user.phone}</p>
                </>}
              />
            </Card>
          </div>
          <div className="col-md-9">
            <Card
              title="My Account"
            >
              <Form>
                <Form.Item label="Name">
                  <Input prefix={<UserOutlined />} defaultValue={user.name} />
                </Form.Item>
                <Form.Item label="Email">
                  <Input prefix={<MailOutlined />} defaultValue={user.email} />
                </Form.Item>
                <Form.Item label="Phone">
                  <Input prefix={<PhoneOutlined />} defaultValue={user.phone} />
                </Form.Item>
                <Form.Item label="Address">
                  <Input prefix={<EnvironmentOutlined />} defaultValue={user.address} />
                </Form.Item>
                <Button type="primary" htmlType="submit">Save Changes</Button>
              </Form>
            </Card>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Profile;