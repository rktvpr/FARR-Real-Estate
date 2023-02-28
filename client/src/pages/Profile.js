import React, { useState } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { QUERY_USER } from '../utils/queries';
import { MUTATION_UPDATE_USER } from '../utils/mutations';
// import { exampleuser } from '../seeders/profileSeeds';
import { Card, Input, Button, Form, message } from 'antd';
import { UserOutlined, MailOutlined, PhoneOutlined, EnvironmentOutlined } from '@ant-design/icons';

const Profile = () => {


  const { loading, error, data } = useQuery(QUERY_USER);

  const [updateUser] = useMutation(MUTATION_UPDATE_USER);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: ''
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await updateUser({
        variables: {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          address: formData.address
        }
      });

      message.success('Profile updated successfully');
    } catch (err) {
      message.error(err.message);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const user = user.data;

  return (
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
            <Form onSubmit={handleSubmit}>
              <Form.Item label="Name">
                <Input prefix={<UserOutlined />} name="name" value={formData.name} onChange={handleChange} />
              </Form.Item>
              <Form.Item label="Email">
                <Input prefix={<MailOutlined />} name="email" value={formData.email} onChange={handleChange} />
              </Form.Item>
              <Form.Item label="Phone">
                <Input prefix={<PhoneOutlined />} name="phone" value={formData.phone} onChange={handleChange} />
              </Form.Item>
              <Form.Item label="Address">
                <Input prefix={<EnvironmentOutlined />} name="address" value={formData.address} onChange={handleChange} />
              </Form.Item>
              <Button type="primary" htmlType="submit">Save Changes</Button>
            </Form>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Profile;
