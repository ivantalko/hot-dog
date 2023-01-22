import axios from 'axios';
axios.defaults.baseURL = 'https://petssupportapi.onrender.com';
export async function postLogout() {
  const response = await axios.get('/auth/logout');
  return response;
}

export async function getUserdata() {
  const { data } = await axios.get('/user/');
  return data;
}

export const getServices = async () => {
  const { data } = await axios.get(`/services`);
  return data;
};

export async function getAllNews() {
  const { data } = await axios.get(`/news`);
  return data;
}
export async function updateUser(body) {
  const { data } = await axios.put('/user/', body);
  return data;
}

export async function changeUserAvatar(body) {
  const { data } = await axios({
    method: 'patch',
    url: '/user/avatar',
    data: body,
    headers: { 'Content-Type': 'multipart/form-data' },
  });

  // const { data } = await axios.patch('/user/avatar', body);
  return data;
}
