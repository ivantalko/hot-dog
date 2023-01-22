import { createAsyncThunk } from '@reduxjs/toolkit';
import { getUserdata, updateUser, changeUserAvatar } from '../../services/API';

export const getUserOperation = createAsyncThunk(
  'user/getUser',
  async (_, thunkAPI) => {
    try {
      const response = await getUserdata();
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

export const patchUserAvatar = createAsyncThunk(
  'user/avatar',
  async (body, thunkAPI) => {
    try {
      const response = await changeUserAvatar(body);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
