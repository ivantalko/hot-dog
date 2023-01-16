import { createAsyncThunk } from '@reduxjs/toolkit';
import { token } from '../Auth/auth-operations';
import { getUserdata } from '../../services/API';

export const getUserOperation = createAsyncThunk(
  'auth/getUser',
  async (_, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      if (!state.auth.accessToken) {
        return thunkAPI.rejectWithValue();
      }
      token.set(state.auth.accessToken);
      const response = await getUserdata();
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
