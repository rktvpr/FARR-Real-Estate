import React, { useState } from "react";

import { Form, Input, Button, Divider, message } from "antd";
import "../pages/Login.css";

import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';



import Auth from '../utils/auth';
import { FacebookOutlined, GoogleOutlined, TwitterOutlined } from "@ant-design/icons";

const Login = () => {
    const [formState, setFormState] = useState({
        username: '',
        email: '',
        password: '',
      });
  
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
  
   // function App(){
        
      //  const login=()=>{
      //      message.success('Login Successful!');
     //   }
    //}
  return (
    <div className="loginBg">
        <h1 style={{textColor:"orange"}}>Welcome Back</h1>

      <Form  className="loginForm"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600}}
        autoComplete="off"
      >
        <Form.Item className="username"
        
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

                <Divider style={{borderColor:"red"}}/>
        <Form.Item 
        
          label="Password" 
          name="password"  
          rules={[{ required: true,  message: "Please input your password!" }]}
          style={{textColor:"blue"}}
          
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
        <Button type="primary" class="next-btn" style={{backgroundColor:"orange", color:"blue"}} htmlType="submit" onClick={submitLogin}>
            Log in
        </Button>  
        <Divider style={{ borderColor: "black"}}>or Login with</Divider> 
        <div className="socialLogin">
        <GoogleOutlined className="socialIcon" onClick={login} />
        
    <TwitterOutlined className="socialIcon" onClick={login} />
    <FacebookOutlined className="socialIcon" onClick={login} />
    </div>
        </Form.Item>
      </Form>
    
    </div>
  
  );
        
};


export default Login;
