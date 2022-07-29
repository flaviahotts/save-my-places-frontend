import { useState, useContext } from "react";
import { AuthContext } from "../../contexts/authContext";
import { api } from "../../api/api";
import { useNavigate } from "react-router-dom";
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, Row } from 'antd';
import React from 'react';
import { Link } from "react-router-dom";
import 'antd/dist/antd.css';



export function Login() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const { setLoggedInUser } = useContext(AuthContext);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSumit(e) {
    e.preventDefault();

    try {
      const response = await api.post("/user/login", form);
      console.log(response.data)
      if(response.data.user.isActive === false){
        navigate("/")
        return
      }

      setLoggedInUser({ ...response.data });

      localStorage.setItem("loggedInUser", JSON.stringify(response.data));

      navigate("/profile");
    } catch (error) {
      console.log(error);
    }
  }
  
    const onFinish = async (values) => {
      
      try {
        const response = await api.post("/user/login", values);
        console.log(response.data)
        if(response.data.user.isActive === false){
          navigate("/")
          return
        }
  
        setLoggedInUser({ ...response.data });
  
        localStorage.setItem("loggedInUser", JSON.stringify(response.data));
  
        navigate("/profile");
    console.log('Finish:', values);
    } catch (error) {
      console.log(error);
    }
  }


    return (
      <>
      <div className="" type="flex" justify="center" align="middle" style={{marginTop:"200px", fontSize:"20px"}}>
  Login
 </div>
    
    <Row type="flex" justify="center" align="middle" style={{minHeight: '40vh'}}>
      <Form onSubmit={handleSumit}
        name="normal_login"
        className="login-form"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
        <Form.Item
          name="email"
          rules={[
            {
              required: true,
              message: 'Please input your email!',
            },
          ]}
        >
          <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your Password!',
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
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item> 
        </Form.Item>  
        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button" style={{background: "", borderColor: ""}}>
            Log in</Button>
            <Form.Item>
            <Link to="/Signup">register here</Link>
            </Form.Item>            
        </Form.Item>
      </Form>
      </Row>
      </>
    );
  };
  


//   return (
//     <form onSubmit={handleSumit}>
//       <h1>Log in to your account</h1>
//       {/* <label>Email:</label> */}
//       <input
//       placeholder="Email"
//         type="email"
//         name="email"
//         value={form.email}
//         onChange={handleChange}
//       />
//       {/* <label>Senha:</label> */}
//       <input
//       placeholder="Password"
//         type="password"
//         name="password"
//         value={form.password}
//         onChange={handleChange}
//       />
//       <button type="submit">Sig in</button>
//     </form>
//   );
// }
