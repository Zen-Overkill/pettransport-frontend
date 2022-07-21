import { useMount } from 'ahooks';
import { Space } from 'antd';
import React from 'react';
import { useState } from 'react';
import { getBillByUserId } from '../../../../services/getBillByUserId';
import CardBill from './CardBill/CardBill';
import './ListBill.less';

function ListBill() {
  const [lisBill, setLisBill] = useState([]);
  const user = JSON.parse(localStorage.getItem('loggedUser'));
  useMount(() => {
    getBillByUserId(user)
      .then((data) => {
        setLisBill(data);
      })
      .catch((err) => console.log(err));
  });
  return (
    <div>
      <div className='list-main'>
        <div className='list-align'>
          <Space
            direction='vertical'
            size='large'
            style={{
              display: 'flex',
            }}
          >
            {lisBill.items?.map((i) => (
              <CardBill item={i} />
            ))}
          </Space>
        </div>
      </div>
    </div>
  );
}

export default ListBill;
