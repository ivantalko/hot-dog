// import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://petssupportapi.onrender.com';

export const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export async function postLogout() {
  const { data } = await axios.post('/auth/logout/');
  return data;
}

export async function getUserdata() {
  const { data } = await axios.get('/auth/current/');
  return data;
}
