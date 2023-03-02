import React, { useEffect, useState } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { QUERY_ME } from '../utils/queries';
import { UPDATE_USER } from '../utils/mutations';
import { Card, Input, Button, Form, message } from 'antd';
import { UserOutlined, MailOutlined, PhoneOutlined, EnvironmentOutlined } from '@ant-design/icons';
import '../profile.css';
import FormProfile from '../components/FormProfile';

const UserInfo = ({ formData }) => (
  <div>
    <p><strong>Name:</strong> {formData.username}</p>
    <p><strong>Email:</strong> {formData.email}</p>
    <p><strong>Phone:</strong> {formData.phone}</p>
    <p><strong>Address:</strong> {formData.address}</p>
  </div>
);

const Profile = () => {

  const { loading, error, data } = useQuery(QUERY_ME, {
    variables: {}
  });
  const [updateUser, { error: mutationError }] = useMutation(UPDATE_USER);

  const [formData, setFormData] = useState(() => {
    const user = data?.user || {};
    return {
      username: user.username || '',
      email: user.email || '',
      phone: user.phone || '',
      address: user.address || ''
    };
  });
  const [saved, setSaved] = useState(false);
  useEffect(() => {
    const user = data?.user || {};
    setFormData({
      username: user.username || '',
      email: user.email || '',
      phone: user.phone || '',
      address: user.address || ''
    })
  }, [loading])

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const cleanCopy = { ...formData }
    // cleanCopy.phone = parseInt(cleanCopy.phone)
    if (cleanCopy.username.length === 0) {
      delete cleanCopy.username
    }
    if (cleanCopy.email.length === 0) {
      delete cleanCopy.email
    }
    if (cleanCopy.phone.length === 0) {
      delete cleanCopy.phone
    }
    if (cleanCopy.address.length === 0) {
      delete cleanCopy.address
    }

    try {
      await updateUser({
        variables: cleanCopy
      });

      message.success('Profile updated successfully');
      setFormData(cleanCopy);
      setSaved(true);
    } catch (err) {
      message.error('handle submit error: ', err.message);
    }
  };


  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const user = data?.me || {}

  return (
    <div className="col-md-9">
      <Card
        title="My Account"
      >
        {saved ? (
          <UserInfo formData={formData} />
        ) : (
          <div>
            <p><strong>Name:</strong> {user.name}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Phone:</strong> {user.phone}</p>
            <p><strong>Address:</strong> {user.address}</p>
          </div>
        )}
        <FormProfile
          user={user}
          formData={formData}
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          mutationError={mutationError}
        />
      </Card>
    </div>
  );
};

export default Profile;
