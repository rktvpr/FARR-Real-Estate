import React, { useState } from "react";
import Axios from "axios";
import { Form, Input, Button } from "antd";


import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';



// import Auth from '../utils/auth';

const Login = () => {
    const [formState, setFormState] = useState({
        username: '',
        email: '',
        password: '',
      });
  const [loginStatus, setLoginStatus]=useState("");
  
  const [login, { error, data }] = useMutation(LOGIN_USER);
  
  const submitLogin = async (event) => {
    

        event.preventDefault()
       // if (res.data.status){
           
            try {
            const { data } = await login({
                variables: { username:formState.username, password:formState.password },
            });


            Auth.login(data.login.token);
            } catch (e) {
            console.error(e);
            }
            // setFormState({
            //     username: '',
            //     email: '',
            //     password: '',
            // })
            
       // } else{
         //   if (res.data.message){
          //      setLoginStatus(res.data.message)
          //  }
   
  };
  return (
    <div>
        <h1>{loginStatus}</h1>
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
                setFormState({
                    ...formState,
                    username:e.target.value
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
            type = "password"
            placeholder="Password"
            onChange={(e) => {
                setFormState({
                    ...formState,
                    password:e.target.value
                });
            }}
          />
        </Form.Item>

        <Form.Item wrapperCol={{offset:8, span:16}}>
        <Button type="primary" htmlType="submit" onClick={submitLogin}>
            Log in
        </Button>    
        </Form.Item>
      </Form>
    </div>
  
  );
        
};


export default Login;
