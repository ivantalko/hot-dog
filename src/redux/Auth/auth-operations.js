import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { postLogin, postLogout } from '../../services/API';
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
      const response = await postLogin(body);
      token.set(response.token);
      console.log(response);
      return response;
    } catch (error) {
      if (error.response.status === 403 || error.response.status === 401) {
        toast.error('Email doesn`t exist or Password is wrong', {
          position: 'top-right',
        });
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
export const registerUserOperation = createAsyncThunk(
  'auth/registration/',
  async (body, thunkAPI) => {
    try {
      const response = await axios.post('/auth/registration', body);
      token.set(response.token);
      return response;
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
