import { createAsyncThunk } from '@reduxjs/toolkit';
import { getUserdata, updateUser } from '../../services/API';

export const getUserOperation = createAsyncThunk(
  'user/getUser',
  async (_, thunkAPI) => {
    try {
      const response = await getUserdata();
      console.log(response);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const putUpdateUser = createAsyncThunk(
  'user/updateUser',
  async (body, thunkAPI) => {
    try {
      const response = await updateUser(body);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
