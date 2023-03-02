import React, { useState } from "react";
import Axios from "axios";
import { Form, Input, Button } from "antd";
import "../pages/Signup.css";
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';
import Header from '../components/Header/index'
import Footer from '../components/Footer/index'

import Auth from '../utils/auth';

const Signup = () => {

  const [formState, setFormState] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [addUser, { error, data }] = useMutation(ADD_USER);

  const submitSignUp = async (event) => {
    event.preventDefault()
    try {
      const { data } = await addUser({
        variables: { ...formState },
      });

      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }

  };
  return (
    <div>
      <Header />
      <div className="signupBg">


        <h1 className="welcome" style={{ textColor: "orange" }}>Sign Up!!</h1>
        <Form className="signupForm"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 600 }}
          autoComplete="off"
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input
              placeholder="Username"
              onChange={(e) => {
                setFormState({
                  ...formState,
                  username: e.target.value
                });
              }}
            />
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: "Please input your email!" }]}
          >
            <Input
              placeholder="Email"
              onChange={(e) => {
                setFormState({
                  ...formState,
                  email: e.target.value
                });
              }}
            />
          </Form.Item>

          <Form.Item

            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input
              type="password"
              placeholder="Password"
              onChange={(e) => {
                setFormState({
                  ...formState,
                  password: e.target.value
                });
              }}
            />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit" onClick={submitSignUp}>
              Sign Up
            </Button>
          </Form.Item>
        </Form>
        <footer>

          <Footer />
        </footer>
      </div>
    </div>

  );

};

export default Signup;
