import axios from 'axios';
axios.defaults.baseURL = 'https://petssupportapi.onrender.com/petsupport';

export async function postRegistartionUser(user) {
  const { data } = await axios.post('/auth/registration/', user);
  return data;
}

export async function postLogin(body) {
  const { data } = await axios.post('/auth/login/', body);
  return data;
}
export async function postLogout() {
  const { data } = await axios.post('/auth/logout/');
  return data;
}

export async function getUserdata() {
  const { data } = await axios.get('/auth/current/');
  return data;
}
