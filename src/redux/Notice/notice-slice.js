import { createSlice } from '@reduxjs/toolkit';
import {
  getNoticesData,
  getMyNotices,
  getNoticesById,
} from './notice-operations';

const initialState = {
  items: [],
  avatar: null,
  byId: '',
  myNotices: [],
};

const status = {
  loading: 'loading',
  success: 'success',
  error: 'error',
};

const noticesSlice = createSlice({
  name: 'notices',
  initialState,
  extraReducers: {
    [getNoticesData.loading](state) {
      state.status = status.loading;
    },
    [getNoticesData.fulfilled](state, action) {
      state.status = status.success;
      state.items = [...action.payload];
    },
    [getNoticesData.rejected](state) {
      state.status = status.error;
    },
    [getNoticesById.loading](state) {
      state.status = status.loading;
    },
    [getNoticesById.fulfilled](state, action) {
      state.status = status.success;
      state.byId = action.payload;
    },
    [getNoticesById.rejected](state) {
      state.status = status.error;
    },
    [getNoticesById.loading](state) {
      state.status = status.loading;
    },
    [getNoticesById.fulfilled](state, action) {
      state.status = status.success;
      state.byId = action.payload;
    },
    [getNoticesById.rejected](state) {
      state.status = status.error;
    },
    [getMyNotices.loading](state) {
      state.status = status.loading;
    },
    [getMyNotices.fulfilled](state, action) {
      state.status = status.success;
      state.myNotices = [...action.payload];
    },
    [getMyNotices.rejected](state) {
      state.status = status.error;
    },
  },
});
export default noticesSlice.reducer;
