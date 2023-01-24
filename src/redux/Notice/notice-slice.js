import { createSlice } from '@reduxjs/toolkit';
import {
  getNoticesData,
  getMyNotices,
  getNoticesById,
  getFavNotices,
  deleteNoticesById,
  getNoticesDataNew,
} from './notice-operations';

const initialState = {
  items: [],
  avatar: null,
  byId: '',
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
      state.items = [...action.payload];
    },
    [getMyNotices.rejected](state) {
      state.status = status.error;
    },
    [getFavNotices.loading](state) {
      state.status = status.loading;
    },
    [getFavNotices.fulfilled](state, action) {
      state.status = status.success;
      state.items = [...action.payload];
    },
    [getFavNotices.rejected](state) {
      state.status = status.error;
    },
    [deleteNoticesById.loading](state) {
      state.status = status.loading;
    },
    [deleteNoticesById.fulfilled](state, action) {
      return {
        ...state,
        items: [...state.items.filter(({ _id }) => _id !== action.payload)],
      };
    },
    [deleteNoticesById.rejected](state) {
      state.status = status.error;
    },
    [getNoticesDataNew.loading](state) {
      state.status = status.loading;
    },
    [getNoticesDataNew.fulfilled](state, action) {
      console.log(action.payload);
      state.status = status.success;
      state.avatar = action.payload;
    },
    [getNoticesDataNew.rejected](state) {
      state.status = status.error;
    },
  },
});
export default noticesSlice.reducer;
