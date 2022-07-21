import axios from 'axios';

export function checkLogin(props) {
  const url = 'https://petlmkstore.tk/api/user/login';
  const LoginName = props.username;
  const Password = props.password;
  const error = { error: 'login-fail' };
  return axios
    .get(url, {
      params: {
        LoginName: LoginName,
        Password: Password,
      },
    })
    .then((response) => response.data)
    .catch((err) => error);
}
