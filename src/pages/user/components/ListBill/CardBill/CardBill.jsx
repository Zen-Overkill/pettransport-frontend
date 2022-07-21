import React from 'react';
import { Card } from 'antd';

function CardBill(props) {
  const title = 'BillID: ' + props.item.transportBillId;
  const billStatusName = props.item.billStatusName;
  const bookDate = props.item.bookDate;
  const bookerId = props.item.bookerId;
  const bookerName = props.item.bookerName;
  const bookerPhone = props.item.bookerPhone;
  const petId = props.item.petId;
  const price = props.item.price;
  const routeId = props.item.routeId;

  console.log(props);
  return (
    <div>
      <Card
        size='small'
        title={title}
        style={{
          width: 500,
        }}
      >
        <p>User Id: {bookerId}</p>
        <p>Full name: {bookerName}</p>
        <p>Phone: {bookerPhone}</p>
        <p>Route Id: {routeId}</p>
        <p>Departure date: {bookDate}</p>
        <p>Pet Id: {petId}</p>
        <p>Total amount: {price} đ</p>
        <p>Bill status: {billStatusName}</p>
      </Card>
    </div>
  );
}

export default CardBill;
