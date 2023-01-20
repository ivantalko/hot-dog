import { createSlice } from '@reduxjs/toolkit';
import { getNoticesData } from './notice-operations';

const initialState = {
  items: [],
  params: 'lostFound',
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
  },
});
export default noticesSlice.reducer;
