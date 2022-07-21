import React from 'react';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
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
import './Login.css';
import { checkLogin } from '../../services/checkLogin';
import { useState } from 'react';
import { useEffect, createContext } from 'react';
import { useNavigate } from 'react-router-dom';
import UserContext from '../../data/UserContext';
import User from '../user/User';
import BookingRouteInfo from '../user/components/BookingRouteInfo/BookingRouteInfo';

const { Header, Footer, Content } = Layout;

function Login() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({ data: {}, isLogin: false });
  const [loginMessage, setLoginMessage] = useState('login correct');
  const onFinish = (values) => {
    checkLogin(values)
      .then((data) => {
        if (data.error) {
          setLoginMessage('Incorrect username or password!');
        } else {
          setUserData({ data: data, isLogin: true });
          localStorage.setItem('loggedUser', JSON.stringify(data));
          if (data.roleId == 0 || data.roleId == 1) {
            navigate('/user/home', { replace: true });
          } else if (data.roleId == 2) {
            navigate('/admin', { replace: true });
          } else if (data.roleId == 3) {
            navigate('/manager', { replace: true });
          }
        }
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    if (loginMessage === 'Incorrect username or password!') {
      message.error(loginMessage);
    }
  }, [loginMessage]);

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <div className='login-background'>
      <div className='login-card'>
        <div className='login-card-head'>
          <div className='login-card-head-left'>
            <h1>Sign In</h1>
            <h4>Welcome back</h4>
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

            <Form.Item name='remember' valuePropName='checked'>
              <Checkbox>Remember me</Checkbox>
              <a className='login-form-forgot' href=''>
                Forgot password
              </a>
            </Form.Item>

            <Form.Item>
              <Button
                type='primary'
                htmlType='submit'
                className='login-form-button'
              >
                Submit
              </Button>
              Or <a href='/register'>register now!</a>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Login;
