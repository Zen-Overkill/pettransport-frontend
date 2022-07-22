import React from 'react';
import { Layout, Menu } from 'antd';
import petLogo from './../../../../assets/images/petLogo.png';
import './HeaderUser.less';
import { Link, useNavigate } from 'react-router-dom';
import { LogoutOutlined } from '@ant-design/icons';

const { Header, Content, Footer } = Layout;

function HeaderUser() {
  const navigate = useNavigate();
  function logOut() {
    localStorage.clear('loggedUser');
    navigate('/login', { replace: true });
  }
  return (
    <div className='header-background'>
      <div className='header-main'>
        <img src="https://i.upanh.org/2022/07/22/petLogo.png" className='header-logo' alt='Pet transport logo' />
        <Menu
          className='header-nav'
          theme='light'
          mode='horizontal'
          defaultSelectedKeys={['home']}
        >
          <Menu.Item key='home'>
            <Link to='home'>Home</Link>
          </Menu.Item>
          <Menu.Item key='bill'>
            <Link to='listBill'>Bills</Link>
          </Menu.Item>
          <Menu.Item key='create-pet'>
            <Link to='pet'>Pets</Link>
          </Menu.Item>
        </Menu>
        <h3 onClick={logOut}>
          <span>{<LogoutOutlined />}</span> Logout
        </h3>
      </div>
    </div>
  );
}

export default HeaderUser;
