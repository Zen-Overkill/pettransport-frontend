import { ArrowRightOutlined } from '@ant-design/icons';
import React from 'react';
import { Button, Space } from 'antd';
import halfArrow from './../../../../../../assets/images/half-arrow.png';
import currentLocation from './../../../../../../assets/images/current-location.png';
import nextLocation from './../../../../../../assets/images/next-location.png';
import './CardChooseRoute.less';
import BookingRouteInfo from '../../../BookingRouteInfo/BookingRouteInfo';
function CardChooseRoute(props) {
  const startTime = props.item.startTime;
  const endTime = props.item.endTime;
  const money = props.item.price + 'đ';
  const departureLabel = props.departureLabel;
  const destinationLabel = props.destinationLabel;
  const date = props.date;
  const startLocation = props.item.startLocation;
  const endLocation = props.item.endLocation;
  const route = {
    label: {
      departureLabel: departureLabel,
      destinationLabel: destinationLabel,
      date: date,
    },
    item: props.item,
  };
  const { next, setBill, setCurrent } = props;
  function nextStep() {
    setBill((bill) => ({ ...bill, route: route }));
    setCurrent(2);
  }

  return (
    <div className='main-card'>
      <div className='card-align'>
        <h2>
          {startTime}
          <img src={halfArrow} alt='half-arrow' className='half-arrow' />
          {endTime}
        </h2>
        <div className='money'>
          <div className='money-text'>{money}</div>
        </div>
        <div className='route-bottom'>
          <div className='route-line-list'>
            <div className='route-line-1'>
              <img
                src={currentLocation}
                alt='current-location'
                className='current-location'
              />
              <div className='text'>{departureLabel}</div>
            </div>
            <div className='route-line-2'>
              <img
                src={nextLocation}
                alt='next-location'
                className='next-location'
              />
              <span>{destinationLabel}</span>
            </div>
          </div>
          <div className='route-confirm'>
            <Button
              type='primary'
              className='route-confirm-button'
              size='large'
              onClick={nextStep}
            >
              Continute
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardChooseRoute;
