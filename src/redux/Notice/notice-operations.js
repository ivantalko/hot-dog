import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const getNoticesData = createAsyncThunk(
  'notices/category/lostFound',
  async (_, thunkAPI) => {
    try {
      const data = await axios.get('/notices/category/lostFound');
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
