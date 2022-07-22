import axios from 'axios';

export function createBill(props) {
  const url = 'https://petlmkstore.tk/api/bill/new-bill';
  const param = {
    BookerId: props.BookerId,
    PetId: props.PetId,
    RouteId: props.RouteId,
    BookDate: props.BookDate,
    Price: props.Price,
    BillStatusId: 1,
  };

  const BookerId = props.BookerId;
  const PetId = props.PetId;
  const RouteId = props.RouteId;
  const BookDate = props.BookDate;
  const Price = props.Price;
  const BillStatusId = 1;

  const user = {
    userId: 11,
    id: 102,
    title: 'title',
    body: 'body',
  };

  return axios
    .post(url, param)
    .then((response) => response.data)
    .catch((err) => console.log(err));
}
