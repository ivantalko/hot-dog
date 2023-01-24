import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import {
  getUserdata,
  updateUser,
  changeUserAvatar,
  addUserPet,
  removeUserPet,
  patchFavNotice,
} from '../../services/API';

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

export const postUserPet = createAsyncThunk(
  'user/petlist',
  async (body, thunkAPI) => {
    try {
      const response = await addUserPet(body);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteUserPet = createAsyncThunk(
  'user/petlistDelete',
  async (id, thunkAPI) => {
    try {
      const response = await removeUserPet(id);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const toogleFavNotice = createAsyncThunk(
  'notices/favorite/{id}',
  async (params, thunkAPI) => {
    const { id, favorite } = params;
    try {
      const response = await patchFavNotice(id, !!+favorite);
      return response;
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
