import { createAsyncThunk } from '@reduxjs/toolkit';
import { token } from '../Auth/auth-operations';
import { getUserdata, updateUser } from '../../services/API';
export const getUserOperation = createAsyncThunk(
  'auth/getUser',
  async (_, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      if (!state.auth.token) {
        return thunkAPI.rejectWithValue();
      }
      token.set(state.auth.token);
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
      const state = thunkAPI.getState();
      if (state.auth.token) {
        const response = await updateUser(body);
        return response;
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
