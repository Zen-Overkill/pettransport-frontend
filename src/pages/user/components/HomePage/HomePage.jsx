import React, { useCallback } from 'react';
import { Layout, Card, DatePicker, Space, Select, Button, Form } from 'antd';
import {
  CheckOutlined,
  SearchOutlined,
  StarFilled,
  StarOutlined,
} from '@ant-design/icons';
import { FaRegHandshake, FaBriefcaseMedical } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import homepagePoster from './../../../../assets/images/homepage-poster.PNG';
import aboutUs from './../../../../assets/images/about-us-pet.jpg';
import featureOn from './../../../../assets/images/feature-on.PNG';
import psa from './../../../../assets/images/psa.png';
import './HomePage.less';
import { useMount } from 'ahooks';
import { useState } from 'react';
import { getVnLocation } from './components/data/getVnLocation';
import { getValueLocation } from './components/data/getValueLocation';
import moment from 'moment';

const { Header, Content, Footer } = Layout;
const { Option } = Select;

function HomePage() {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const [location, setLocation] = useState({
    vnLocation: [],
    valueLocation: [],
  });
  const [bookingRoute, setBookingRoute] = useState({
    departureLabel: '',
    departureValue: '',
    destinationLabel: '',
    destinationValue: '',
    departureDate: '',
  });
  const options = [];
  useMount(() => {
    setLocation({
      vnLocation: getVnLocation(),
      valueLocation: getValueLocation(),
    });
  });
  if (location.valueLocation.length > 0 && location.vnLocation.length > 0) {
    for (let i = 0; i < location.vnLocation.length; i++) {
      options.push({
        label: location.vnLocation[i],
        value: location.valueLocation[i],
      });
    }
  }

  const disabledDate = (current) => {
    return current < moment().startOf('day');
  };
  const onFinish = (values) => {
    navigate('/user/confirm-booking-route', { state: bookingRoute });
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <div>
      <Layout className='layout'>
        <Content
          style={{
            padding: '0 50px',
            background: '#fff',
          }}
        >
          <img
            src={homepagePoster}
            className='homepage-poster'
            alt='Pet transport logo'
          />

          <Card className='card-book-transport'>
            <Form
              form={form}
              name='control-hooks'
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
            >
              <Space>
                <Card title='From' className='homepage-card-title'>
                  <Form.Item
                    name='departure'
                    rules={[
                      {
                        required: true,
                      },
                    ]}
                  >
                    <Select
                      showSearch
                      placeholder='Choose a departure'
                      optionFilterProp='label'
                      filterOption={(input, option) =>
                        option.label.toLowerCase().includes(input.toLowerCase())
                      }
                      options={options}
                      onChange={(value, data) => {
                        setBookingRoute((bookingRoute) => ({
                          ...bookingRoute,
                          departureLabel: data.label,
                          departureValue: data.value,
                        }));
                      }}
                    ></Select>
                  </Form.Item>
                </Card>

                <Card title='To' className='homepage-card-title'>
                  <Form.Item
                    name='destination'
                    rules={[
                      {
                        required: true,
                      },
                    ]}
                  >
                    <Select
                      showSearch
                      placeholder='Choose a destination'
                      optionFilterProp='label'
                      filterOption={(input, option) =>
                        option.label.toLowerCase().includes(input.toLowerCase())
                      }
                      options={options}
                      onChange={(value, data) => {
                        setBookingRoute((bookingRoute) => ({
                          ...bookingRoute,
                          destinationLabel: data.label,
                          destinationValue: data.value,
                        }));
                      }}
                    ></Select>
                  </Form.Item>
                </Card>

                <Card title='Departure date' className='homepage-card-title'>
                  <Form.Item
                    name='departureDate'
                    rules={[
                      {
                        required: true,
                        message: 'departure date is required',
                      },
                    ]}
                  >
                    <DatePicker
                      disabledDate={disabledDate}
                      onChange={(data, value) =>
                        setBookingRoute((bookingRoute) => ({
                          ...bookingRoute,
                          departureDate: value,
                        }))
                      }
                    />
                  </Form.Item>
                </Card>
              </Space>
              <Form.Item>
                <Button
                  className='button'
                  type='primary'
                  size='large'
                  htmlType='submit'
                  icon={<SearchOutlined />}
                >
                  SEARCH ROUTES
                </Button>
              </Form.Item>
            </Form>
          </Card>

          <div className='site-layout-content'>
            <div className='about-us'>
              <div className='about-us-align'>
                <Space direction='vertical' size='middle'>
                  <h2>About Us</h2>
                  <p>
                    Paws and Ear Pets Transport has been helping owners
                    transport their dogs and cats since 2022. BCPT strives to
                    have your pet's move be as safe, comfortable and stress-free
                    as possible. We pay particular attention to details such as
                    routing, weather, road conditions and other factors that may
                    affect your pet(s) travel, comfort, and safety. Your pets
                    are our family, and we treat them with nothing but the
                    highest level of respect.
                  </p>
                  <img
                    src={aboutUs}
                    className='homepage-about-us'
                    alt='About us pet picture'
                  />
                </Space>
              </div>
              <div className='feature-on'>
                <img
                  src={featureOn}
                  alt='feature-on'
                  className='feature-on-img'
                />
              </div>
              <div className='psa'>
                <div className='psa-align'>
                  <Space align='center'>
                    <img src={psa} alt='PSA' className='psa-img' />
                    <div className='psa-right'>
                      <h2>
                        PSA: Beware of Fraudulent Pet Relocation Companies
                      </h2>
                      <p>
                        While there are many dog and cat transport companies out
                        there claiming to be the best, many of them WILL scam
                        you and put your pets at risk. In short, be on the
                        look-out for shady and malicious behavior.
                      </p>
                    </div>
                  </Space>
                </div>
              </div>
              <div className='certified'>
                <div className='certified-align'>
                  <h2>Why Paw and Ears Pet Transport?</h2>
                  <p>
                    Paw and Ears Pet Transport is committed to making your pet
                    relocation process as easy as possible. Our genuine love for
                    animals, USDA and IPATA certifications, top-of-the-line pet
                    insurance, extensive training, and years of experience make
                    us the best choice for your pet transport needs.
                  </p>
                  <div className='certified-bottom'>
                    <div className='certified-bottom-align'>
                      <div className='certified-icon-align'>
                        <span className='certified-icon-circle'>
                          <StarFilled />
                        </span>
                      </div>
                      <div className='certified-bottom-text'>
                        <h3>USDA Certified</h3>
                        <p>
                          BCPT is willing to provide legitimate proof that we
                          are USDA registered and IPATA certified. While many
                          pet moving companies claim they are, we can actually
                          prove it. This ensures your dog or cat is in good
                          hands.
                        </p>
                      </div>
                    </div>
                    <div className='certified-bottom-align'>
                      <div className='certified-icon-align'>
                        <span className='certified-icon-circle'>
                          <FaRegHandshake />
                        </span>
                      </div>
                      <div className='certified-bottom-text'>
                        <h3>Insured and Covered</h3>
                        <p>
                          BCPT is insured and covered if something goes wrong
                          during pet relocation. We pride ourselves on doing
                          good business and ensuring your pets are taken care
                          of.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className='certified-bottom'>
                    <div className='certified-bottom-align'>
                      <div className='certified-icon-align'>
                        <span className='certified-icon-circle'>
                          <CheckOutlined />
                        </span>
                      </div>

                      <div className='certified-bottom-text'>
                        <h3>Commitment to Excellence</h3>
                        <p>
                          Not only do we want you to have a great transport
                          experience, we want you to come back and use us again.
                          We are committed to making sure you and your pets are
                          happy. Feel free to check out our Google reviews to
                          see what others had to say about us.
                        </p>
                      </div>
                    </div>
                    <div className='certified-bottom-align'>
                      <div className='certified-icon-align'>
                        <span className='certified-icon-circle'>
                          <FaBriefcaseMedical />
                        </span>
                      </div>
                      <div className='certified-bottom-text'>
                        <h3>CPR Certified</h3>
                        <p>
                          Our first aid and CPR-certified drivers allow clients
                          to feel confident about their pet's safety while on
                          board - click here to learn more about the life-saving
                          assistance our staff is trained to administer to your
                          loved one.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Content>
      </Layout>
    </div>
  );
}

export default HomePage;
