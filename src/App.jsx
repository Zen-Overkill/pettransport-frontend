import * as React from 'react';
import { Routes, Route, Link, Navigate, Outlet } from 'react-router-dom';
import './App.css';
import Admin from './pages/admin/Admin';
import MainLayout from './pages/MainLayout';
import Login from './pages/login/Login';
import Manager from './pages/manager/Manager';
import Missing from './pages/Missing';
import Register from './pages/register/Register';
import Unauthorized from './pages/Unauthorized';
import ConfirmBookingRoute from './pages/user/components/ConfirmBookingRoute/ConfirmBookingRoute';
import HomePage from './pages/user/components/HomePage/HomePage';
import Pet from './pages/user/components/Pet/Pet';
import User from './pages/user/User';
import ListBill from './pages/user/components/ListBill/ListBill';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Navigate to='/login' replace />} />
        <Route path='/' element={<MainLayout />}>
          <Route path='login' element={<Login />} />
          <Route path='register' element={<Register />} />
          <Route path='unauthorized' element={<Unauthorized />} />

          <Route path='user' element={<User />}>
            <Route path='home' element={<HomePage />} />
            <Route path='pet' element={<Pet />} />
            <Route
              path='confirm-booking-route'
              element={<ConfirmBookingRoute />}
            />
            <Route path='listBill' element={<ListBill />} />
          </Route>
          <Route path='manager' element={<Manager />} />
          <Route path='admin' element={<Admin />} />
        </Route>
        <Route path='*' element={<Missing />} />
      </Routes>
    </div>
  );
}

export default App;
