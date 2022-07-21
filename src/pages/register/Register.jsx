import React, { useEffect, useState } from 'react';
import {
  UserOutlined,
  LockOutlined,
  MailOutlined,
  PhoneOutlined,
} from '@ant-design/icons';
import {
  Layout,
  Button,
  Checkbox,
  Form,
  Input,
  Card,
  Space,
  message,
} from 'antd';
import petLogo from './../../assets/images/petLogo.png';
import 'antd/dist/antd.min.css';
import './Register.css';
import { useNavigate } from 'react-router-dom';
import { register } from '../../services/register';

const { Header, Footer, Content } = Layout;

function Register() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState();
  const onFinish = (values) => {
    register(values)
      .then((data) => {
        setUserData(data);
        navigate('/login', { replace: true });
      })
      .catch((err) => console.log(err));
  };
  console.log(userData);
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <div className='login-background'>
      <div className='login-card'>
        <div className='login-card-head'>
          <div className='login-card-head-left'>
            <h1>Register</h1>
            <h4>Welcome to Paws and Ears</h4>
          </div>
          {/* <div className='login-card-head-right'> */}
          <img src={petLogo} alt='Pet transport logo' className='login-logo' />
          {/* </div> */}
        </div>
        <div className='login-input'>
          <Form
            name='basic'
            // initialValues={{
            //   remember: true,
            // }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete='off'
          >
            <Form.Item
              name='username'
              rules={[
                {
                  required: true,
                  message: 'Please input your username!',
                },
              ]}
            >
              <Input placeholder='Username' prefix={<UserOutlined />} />
            </Form.Item>

            <Form.Item
              name='password'
              rules={[
                {
                  required: true,
                  message: 'Please input your password!',
                },
              ]}
            >
              <Input.Password
                placeholder='Password'
                prefix={<LockOutlined />}
              />
            </Form.Item>
            <Form.Item
              name='confirmPassword'
              rules={[
                {
                  required: true,
                  message: 'Please confirm your password!',
                },
              ]}
            >
              <Input.Password
                placeholder='Confirm password'
                prefix={<LockOutlined />}
              />
            </Form.Item>

            <Form.Item
              name='fullName'
              rules={[
                {
                  required: true,
                  message: 'Please input your full name!',
                },
              ]}
            >
              <Input placeholder='Full name' prefix={<UserOutlined />} />
            </Form.Item>

            <Form.Item
              name='email'
              rules={[
                {
                  required: true,
                  message: 'Please input your email!',
                },
              ]}
            >
              <Input placeholder='Email' prefix={<MailOutlined />} />
            </Form.Item>
            <Form.Item
              name='phone'
              rules={[
                {
                  required: true,
                  message: 'Please input your phone number!',
                },
              ]}
            >
              <Input placeholder='Phone number' prefix={<PhoneOutlined />} />
            </Form.Item>

            <Form.Item>
              <Button
                type='primary'
                htmlType='submit'
                className='login-form-button'
              >
                Submit
              </Button>
              Or <a href='/login'>login now!</a>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Register;
