import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { postLogin, postLogout } from '../../services/API';

export const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const loginUserOperation = createAsyncThunk(
  'auth/login',
  async (body, thunkAPI) => {
    try {
      const response = await postLogin(body);
      token.set(response.accessToken);
      return response;
    } catch (error) {
      if (error.response.status === 403) {
        alert('Email doesn`t exist or Password is wrong.');
      }
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const logoutUserOperation = createAsyncThunk(
  'auth/logout',
  async (_, thunkAPI) => {
    try {
      const response = await postLogout();
      token.unset(response.accessToken);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
