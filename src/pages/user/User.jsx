import React from 'react';
import HomePage from './components/HomePage/HomePage';
import { Routes, Route, Link, Outlet } from 'react-router-dom';
import Pet from './components/Pet/Pet';
import HeaderUser from './components/HeaderUser/HeaderUser';
import FooterUser from './components/Footer/FooterUser';

function User() {
  return (
    <div>
      <HeaderUser />
      <Outlet />
      <FooterUser />
    </div>
  );
}

export default User;
