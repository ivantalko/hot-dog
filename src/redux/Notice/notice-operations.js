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
  async (token, thunkAPI) => {
    try {
      const { data } = await axios.get('/notices/myads', token);
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

export const getFavNotices = createAsyncThunk(
  '/notices/favorite',
  async (token, thunkAPI) => {
    try {
      const { data } = await axios.get('/notices/favorite', token);
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

export const deleteNoticesById = createAsyncThunk(
  'notices/myads/{id}',
  async (id, thunkAPI) => {
    try {
      await axios.delete(`/notices/myads/${id}`);
      return id;
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

export const postNewNotice = createAsyncThunk(
  'notices/new',
  async (body, thunkAPI) => {
    try {
      const { data } = await axios({
        method: 'post',
        url: '/notices/new',
        data: body,
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
