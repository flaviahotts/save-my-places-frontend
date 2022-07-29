import { useState } from "react";
import { api } from "../../api/api";
import { useNavigate } from "react-router-dom";
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input, Row } from 'antd';
import React from 'react';
import { Link } from "react-router-dom";
import 'antd/dist/antd.css';
// import styles from "./styles.module.css";
// import { Link } from "react-router-dom";

export function Signup() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    
  });

  // const [img, setImg] = useState("");

  // function handleChange(e) {
  //   setForm({ ...form, [e.target.name]: e.target.value });
  // }

  // function handleImage(e) {
  //   setImg(e.target.files[0]);
  // }

  // async function handleUpload() {
  //   try {
  //     const uploadData = new FormData();
  //     uploadData.append("picture", img);

  //     const response = await api.post("/upload-image", uploadData);

  //     return response.data.url;
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      // const imgURL = await handleUpload();
      await api.post("/user/signup", form);

      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  }

  const onFinish = async (values) => {
    console.log('Received values of form: ', values);
    try {
      await api.post("/user/signup", values);

      navigate("/login");
    } catch (error) {
      console.log(error);
    }
    
  };

  

  return (
 <>
 <div className="" type="flex" justify="center" align="middle" style={{marginTop:"200px", fontSize:"20px"}}>
  Create an account
 </div>
    
    <Row type="flex" justify="center" align="middle" style={{minHeight: '40vh'}}>
      
      <Form 
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    >
       <Form.Item
        name="name"
        rules={[
          {
            required: true,
            message: 'Please input your username',
          },
        ]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="name" />
      </Form.Item>

      <Form.Item
        name="email"
        rules={[
          {
            required: true,
            message: 'Please input your email',
          },
        ]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="email" />
      </Form.Item>

      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your Password',
          },
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Create
        </Button>  
        <Form.Item>
            <Link to="/">back</Link> 
            </Form.Item>      
      </Form.Item>
    </Form>
    </Row>
    </>
  );
};