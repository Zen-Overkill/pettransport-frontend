import { Space } from 'antd';
import React from 'react';
import { useMount } from 'ahooks';
import CardChooseRoute from '../CardChooseRoute/CardChooseRoute';
import './ListCardRoute.less';
import { getAllRoutes } from '../../../../../../services/getAllRoutes';
import { useState } from 'react';
import { getRoutes } from '../../../../../../services/getRoutes';

function ListCardRoute(props) {
  const [route, setRoute] = useState([]);
  const { next, setBill, setCurrent } = props;
  const departureLabel = props.departureLabel;
  const destinationLabel = props.destinationLabel;
  const date = props.date;
  const routeProps = {
    startLocation: props.departureValue,
    endLocation: props.destinationValue,
  };
  useMount(() => {
    getRoutes(routeProps)
      .then((data) => {
        setRoute(data);
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
            {route.items?.map((i) => (
              <CardChooseRoute
                item={i}
                next={next}
                setCurrent={setCurrent}
                setBill={setBill}
                departureLabel={departureLabel}
                destinationLabel={destinationLabel}
                date={date}
              />
            ))}
          </Space>
        </div>
      </div>
    </div>
  );
}

export default ListCardRoute;
