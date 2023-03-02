import React, { useState } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { QUERY_PROFILE } from '../utils/queries';
import { UPDATE_USER } from '../utils/mutations';
import { Card, Input, Button, Form, message } from 'antd';
import { UserOutlined, MailOutlined, PhoneOutlined, EnvironmentOutlined } from '@ant-design/icons';
// import '../profile.css';


const Profile = () => {

  const { loading, error, data } = useQuery(QUERY_PROFILE, {
    variables: {username:"rahsan123"}
  });
  const [updateUser, {error: mutationError}] = useMutation(UPDATE_USER);

  const [formData, setFormData] = useState({
    username: '',
    password: '',
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

    const cleanCopy = {...formData}
    // cleanCopy.phone = parseInt(cleanCopy.phone)
    if(cleanCopy.username.length === 0){
      delete cleanCopy.username
    }
    if(cleanCopy.password.length === 0){
      delete cleanCopy.username
    }
    if(cleanCopy.email.length === 0){
      delete cleanCopy.email
    }
    if(cleanCopy.phone.length === 0){
      delete cleanCopy.username
    }
    if(cleanCopy.address.length === 0){
      delete cleanCopy.username
    }

    try {
      await updateUser({
        variables: cleanCopy
      });

      message.success('Profile updated successfully');
    } catch (err) {
      message.error('handle submit error: ',err.message);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const user = data?.user || {}

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
              {mutationError}
              <Button type="submit" onClick={handleSubmit} htmlType="submit">Save Changes</Button>
            </Form>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Profile;
