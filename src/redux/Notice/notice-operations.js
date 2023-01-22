import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

export const getNoticesData = createAsyncThunk(
  'notices/category',
  async (category, thunkAPI) => {
    try {
      const { data } = await axios.get(`/notices/category/${category}`);
      return data;
    } catch (error) {
      if (error.data.status === 401) {
        toast.error('Something went wrong', {
          position: 'top-right',
        });
      }
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getNoticesById = createAsyncThunk(
  'notices/{id}',
  async (id, thunkAPI) => {
    try {
      const { data } = await axios.get(`/notices/${id}`);
      return data;
    } catch (error) {
      if (error.data.status === 401) {
        toast.error('Something went wrong', {
          position: 'top-right',
        });
      }
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getMyNotices = createAsyncThunk(
  'notices/myads',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get(`/notices/myads`);
      return data;
    } catch (error) {
      if (error.data.status === 401) {
        toast.error('Something went wrong', {
          position: 'top-right',
        });
      }
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);