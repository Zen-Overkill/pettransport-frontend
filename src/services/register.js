import axios from 'axios';

export function register(props) {
  const url = 'https://petlmkstore.tk/api/user/register';
  const regis = {
    LoginName: props.username,
    Password: props.password,
    ConfirmPassword: props.confirmPassword,
    FullName: props.fullName,
    Email: props.email,
    Phone: props.phone,
  };
  const error = { error: 'register-fail' };
  return axios
    .post(url, regis)
    .then((response) => response.data)
    .catch((err) => error);
}
