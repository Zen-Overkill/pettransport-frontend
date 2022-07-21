import React from 'react';
import moment from 'moment';
import { useMount } from 'ahooks';
import { createBill } from '../../../../services/createBill';
import { useState } from 'react';
import { Button, Space } from 'antd';
import './Payment.less';
import { useNavigate } from 'react-router-dom';

function Payment(props) {
  const [data, setData] = useState({});
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('loggedUser'));
  const date = moment(props.bill.route.label.date).format('YYYY-MM-DD');
  const { setCurrent } = props;
  const bill = {
    BookerId: user.userId,
    PetId: props.bill.info.petId,
    RouteId: props.bill.route.item.routeId,
    BookDate: props.bill.route.label.date,
    Price: props.bill.route.item.price,
    BillStatusId: 1,
  };

  function create() {
    createBill(bill)
      .then((data) => {
        setData(data);
      })
      .catch((err) => console.log(err));
    navigate('/user/listBill', { replace: true });
  }
  function preStep() {
    setCurrent(2);
  }

  return (
    <div>
      <div className='form'>
        <h2>Payment information</h2>
        <h3>Customer information</h3>
        <div className='customer-info-contain'>
          <div className='customer-info-align'>
            <h4>
              <span className='span1'>Full name:</span>
              <span className='span2'>{props.bill.info.value.fullname}</span>
            </h4>
            <h4>
              <span className='span1'>Phone:</span>
              <span className='span2'>{props.bill.info.value.phone}</span>
            </h4>
            <h4>
              <span className='span1'>Email:</span>
              <span className='span2'>{props.bill.info.value.email}</span>
            </h4>
            <h4>
              <span className='span1'>Pet name:</span>
              <span className='span2'>{props.bill.info.value.pet}</span>
            </h4>
          </div>
        </div>
        <h3>Route information</h3>
        <div className='customer-info-contain'>
          <div className='customer-info-align'>
            <h4>
              <span className='span1'>Routes:</span>
              <span className='span2'>
                {props.bill.route.label.departureLabel} {'=>'}{' '}
                {props.bill.route.label.destinationLabel}
              </span>
            </h4>
            <h4>
              <span className='span1'>Departure date:</span>
              <span className='span2'>{props.bill.route.label.date}</span>
            </h4>
            <h4>
              <span className='span1'>Departure time:</span>
              <span className='span2'>{props.bill.route.item.startTime}</span>
            </h4>
            <h4>
              <span className='span1'>License plate number:</span>
              <span className='span2'>{props.bill.route.item.vehicleId}</span>
            </h4>
          </div>
        </div>
        <div className='total-money'>
          <h3 className='total-money-h3'>Total amount</h3>
          <h1>{props.bill.route.item.price} đ</h1>
        </div>
      </div>
      <div className='button-step'>
        <Space size='large'>
          <Button onClick={preStep} size='large'>
            Previous
          </Button>
          <Button
            type='primary'
            htmlType='submit'
            onClick={create}
            size='large'
          >
            Pay
          </Button>
        </Space>
      </div>
    </div>
  );
}

export default Payment;
