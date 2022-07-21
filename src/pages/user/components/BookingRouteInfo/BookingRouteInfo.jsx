import React, { useContext, createContext } from 'react';
import { Button, Checkbox, Form, Input, Select, Space } from 'antd';
import './BookingRouteInfo.less';
import { useMount } from 'ahooks';
import UserContext from '../../../../data/UserContext';
import { getPetByOwner } from '../../../../services/getPetByOwner';
import { useState } from 'react';

function BookingRouteInfo(props) {
  const [form] = Form.useForm();
  const [userinfo, setUserInfo] = useState();
  const { next, setBill, setCurrent } = props;
  const { Option } = Select;
  const user = JSON.parse(localStorage.getItem('loggedUser'));
  const [getPet, setGetPet] = useState([]);
  const [pet, setPet] = useState({});

  useMount(() => {
    getPetByOwner(user)
      .then((data) => {
        setGetPet(data);
      })
      .catch((err) => console.log(err));
  });
  const options = [];
  if (getPet.length > 0) {
    for (let i = 0; i < getPet.length; i++) {
      options.push({
        label: getPet[i].petName,
        value: getPet[i].petId,
      });
    }
  }

  const onFinish = (values) => {
    setUserInfo(values);
    setBill((bill) => ({ ...bill, info: { value: values, petId: pet.petId } }));
    setCurrent(3);
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  function preStep() {
    setCurrent(1);
  }

  return (
    <div className='info-background'>
      <div className='form-info-background'>
        <h1>Customer information</h1>
        <Form
          form={form}
          name='control-hooks'
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          // className='form-customer-info'
        >
          <Form.Item
            name='fullname'
            rules={[
              {
                required: true,
                message: 'Please input your fullname!',
              },
            ]}
          >
            <div className='input-align'>
              <h4>Full name *</h4>
              <Input placeholder='Full name' />
            </div>
          </Form.Item>

          <Form.Item
            name='phone'
            rules={[
              {
                required: true,
                message: 'Please input your phone!',
              },
            ]}
          >
            <div className='input-align'>
              <h4>Phone number *</h4>
              <Input placeholder='Phone number' />
            </div>
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
            <div className='input-align'>
              <h4>Email *</h4>
              <Input placeholder='Email' />
            </div>
          </Form.Item>
          <div className='input-align'>
            <h4>Select your pet *</h4>
            <Form.Item
              name='pet'
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Select
                showSearch
                placeholder='Select your pet'
                optionFilterProp='label'
                filterOption={(input, option) =>
                  option.label.toLowerCase().includes(input.toLowerCase())
                }
                options={options}
                onChange={(value, data) => {
                  setPet((pet) => ({
                    ...pet,
                    petName: data.label,
                    petId: data.value,
                  }));
                }}
              ></Select>
            </Form.Item>
          </div>
          <Form.Item
            name='term'
            valuePropName='checked'
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Checkbox>
              I agree to the <a>terms and conditions</a>
            </Checkbox>
          </Form.Item>
          <Space>
            <Form.Item>
              <Button onClick={preStep}>Previous</Button>
            </Form.Item>
            <Form.Item>
              <Button type='primary' htmlType='submit'>
                next
              </Button>
            </Form.Item>
          </Space>
        </Form>
      </div>
    </div>
  );
}

export default BookingRouteInfo;
