import { Layout, Button, message, Steps, Space } from 'antd';
import React, { useState } from 'react';
import moment from 'moment';
import { useLocation } from 'react-router-dom';
import CardChooseRoute from './components/CardChooseRoute/CardChooseRoute';
import ListCardRoute from './components/ListCardRoute/ListCardRoute';
import './ConfirmBookingRoute.less';
import BookingRouteInfo from '../BookingRouteInfo/BookingRouteInfo';
import Payment from '../Payment/Payment';
const { Step } = Steps;
const { Header, Content, Footer } = Layout;

function ConfirmBookingRoute() {
  const [current, setCurrent] = useState(1);
  const [bill, setBill] = useState({ route: {}, info: {} });
  const location = useLocation();
  const date = moment(location.state.departureDate).format('DD/MM/YYYY');
  const departureLabel = location.state.departureLabel;
  const destinationLabel = location.state.destinationLabel;
  const departureValue = location.state.departureValue;
  const destinationValue = location.state.destinationValue;
  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };
  const steps = [
    {
      title: 'Choose route',
      content: 'first',
    },
    {
      title: 'Confirm route',
      content: (
        <ListCardRoute
          departureLabel={departureLabel}
          destinationLabel={destinationLabel}
          departureValue={departureValue}
          destinationValue={destinationValue}
          date={location.state.departureDate}
          setCurrent={setCurrent}
          setBill={setBill}
          next={next}
        />
      ),
    },
    {
      title: 'Customer information',
      content: (
        <BookingRouteInfo
          next={next}
          setCurrent={setCurrent}
          setBill={setBill}
        />
      ),
    },
    {
      title: 'Payment',
      content: <Payment bill={bill} setCurrent={setCurrent} />,
    },
  ];
  return (
    <div>
      <Layout className='layout'>
        <Content
          style={{
            padding: '0 50px',
            background: '#fff',
          }}
        >
          <div className='main'>
            <div className='main-align'>
              <div className='location-date'>
                <h1>
                  {departureLabel} - {destinationLabel}
                </h1>
                <h3>{date}</h3>
              </div>
              <div className='step'>
                <Steps current={current}>
                  {steps.map((item) => (
                    <Step key={item.title} title={item.title} />
                  ))}
                </Steps>
              </div>
              <div className='steps-content-align'>
                <div className='steps-content'>{steps[current].content}</div>
                {/* <div className='steps-action'>
                  {current != 1 && current < steps.length - 1 && (
                    <Button type='primary' onClick={() => next()}>
                      Next
                    </Button>
                  )}
                  {current === steps.length - 1 && (
                    <Button
                      type='primary'
                      onClick={() => message.success('Processing complete!')}
                    >
                      Done
                    </Button>
                  )}
                  {current != 1 && current > 0 && (
                    <Button
                      style={{
                        margin: '0 8px',
                      }}
                      onClick={() => prev()}
                    >
                      Previous
                    </Button>
                  )}
                </div> */}
              </div>
            </div>
          </div>
        </Content>
      </Layout>
    </div>
  );
}

export default ConfirmBookingRoute;
