import axios from 'axios';

export function getBillByUserId(props) {
  const url = 'https://petlmkstore.tk/api/bill/bill-from-user';
  const userId = props.userId;
  return axios
    .get(url + '/' + userId, {
      params: {
        PageIndex: 1,
        PageSize: 10,
      },
    })
    .then((response) => response.data)
    .catch((err) => console.log(err));
}
