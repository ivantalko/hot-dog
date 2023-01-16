import { createSlice } from '@reduxjs/toolkit';
import { StatusForAll } from '../status';
import { loginUserOperation, logoutUserOperation } from './auth-operations';

const initialState = {
  name: '',
  _id: null,
  accessToken: null,
  status: StatusForAll.init,
};
const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [loginUserOperation.pending](state) {
      state.status = StatusForAll.loading;
    },
    [loginUserOperation.fulfilled](state, action) {
      state.status = StatusForAll.success;
      state.name = action.payload.name;
      state._id = action.payload._id;
      state.accessToken = action.payload.accessToken;
    },
    [loginUserOperation.rejected](state) {
      state.status = StatusForAll.error;
      state.name = '';
      state._id = null;
      state.accessToken = null;
    },
    [logoutUserOperation.pending](state) {
      state.status = StatusForAll.loading;
    },
    [logoutUserOperation.fulfilled]() {
      return initialState;
    },
    [logoutUserOperation.rejected](state) {
      state.status = StatusForAll.error;
    },
  },
});
export default authSlice.reducer;
