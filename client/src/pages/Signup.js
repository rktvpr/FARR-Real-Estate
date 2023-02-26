import React, { useState } from "react";
import Axios from "axios";
import { Form, Input, Button } from "antd";
//import { useMutation } from '@apollo/client';
//import { ADD_USER } from '../utils/mutations';

import Auth from '../utils/auth';

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  /*const [formState, setFormState] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [addUser, { error, data }] = useMutation(ADD_USER);
*/
  const submitSignUp = () => {
    Axios.post("http://localhost:3001",{username:username,email:email, password:password })
    .then((res)=>{
        console.log(res)
        /*try {
            const { data } = await addUser({
              variables: { ...formState },
            });
      
            Auth.login(data.addUser.token);
          } catch (e) {
            console.error(e);
          }*/
    });
  };
  return (
    <div>
      <Form
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
              setUsername(e.target.value);
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
              setEmail(e.target.value);
            }}
          />
        </Form.Item>

        <Form.Item
          
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input
            type = "password"
            placeholder="Password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </Form.Item>

        <Form.Item wrapperCol={{offset:8, span:16}}>
        <Button type="primary" htmlType="submit" onClick={submitSignUp}>
            Sign Up
        </Button>    
        </Form.Item>
      </Form>
    </div>
  );
};

export default Signup;
