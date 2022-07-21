import React, { useEffect } from 'react';
import axios from 'axios';
import {
  Button,
  Card,
  DatePicker,
  Form,
  Input,
  Select,
  Space,
  Table,
  Tag,
} from 'antd';
import './Pet.less';
import { getPetByOwner } from '../../../../services/getPetByOwner';
import { useMount } from 'ahooks';
import { useState } from 'react';
import './Pet.less';

const { Option } = Select;

function Pet() {
  const [pet, setPet] = useState([]);
  const user = JSON.parse(localStorage.getItem('loggedUser'));
  useMount(() => {
    getPetByOwner(user)
      .then((data) => {
        setPet(data);
      })
      .catch((err) => console.log(err));
  });
  console.log(pet);

  const columns = [
    {
      title: 'Name',
      dataIndex: 'petName',
      key: 'petName',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Type',
      dataIndex: 'typeName',
      key: 'typeName',
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size='middle'>
          <a>edit</a>
          <a>Delete</a>
        </Space>
      ),
    },
  ];
  return (
    <div className='main'>
      <Table columns={columns} dataSource={pet} />
    </div>
  );
}

export default Pet;
