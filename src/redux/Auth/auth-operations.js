import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { postLogout } from '../../services/API';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
      const response = await axios.post('/auth/login/', body);
      token.set(response.data.token);
      return response.data;
    } catch (error) {
      if (error.response.status === 401) {
        toast.error('Email doesn`t exist or Password is wrong', {
          position: 'top-right',
        });
      }
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const registerUserOperation = createAsyncThunk(
  'auth/registration/',
  async (body, thunkAPI) => {
    try {
      const response = await axios.post('/auth/registration', body);
      token.set(response.data.token);
      return response.data;
    } catch (error) {
      if (error.response.status === 500) {
        toast.error(
          'This email or Phone are already exist in the our dayabase',
          {
            position: 'top-right',
          }
        );
      }
      if (error.response.status === 400) {
        toast.error(error.response.data.message, {
          position: 'top-right',
        });
      }
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const logoutUserOperation = createAsyncThunk(
  'auth/logout',
  async (_, thunkAPI) => {
    try {
      const response = await postLogout();
      token.unset();
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const currentUser = createAsyncThunk(
  'auth/currentUser',
  async (_, thunkAPI) => {
    const { auth } = thunkAPI.getState();
    if (auth.token === '') {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }
    token.set(auth.token);
    try {
      const { data } = await axios.get('/auth/current');
      token.set(data.token);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error?.response?.data?.message);
    }
  }
);
