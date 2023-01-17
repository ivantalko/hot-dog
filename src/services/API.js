import { createAsyncThunk } from '@reduxjs/toolkit';
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

export async function postRegistartionUser(user) {
  try {
    const { data } = await axios.post('/auth/registration/', user);
    return data;
  } catch (e) {
    console.log(e);
  }
}

export const register = createAsyncThunk(
  '/auth/registration/',
  async (data, thunkAPI) => {
    try {
      const response = await postRegistartionUser(data);
      return response;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export async function postLogin(body) {
  try {
    const { data } = await axios.post('/auth/login/', body);
    return data;
  } catch (e) {
    console.log(e);
  }
}

export async function postLogout() {
  const { data } = await axios.post('/auth/logout/');
  return data;
}

export async function getUserdata() {
  const { data } = await axios.get('/auth/current/');
  return data;
}
