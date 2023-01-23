import { createSlice } from '@reduxjs/toolkit';
import { StatusForAll } from '../status';
import {
  // currentUser,
  loginUserOperation,
  logoutUserOperation,
  registerUserOperation,
  currentUserOperation,
} from './auth-operations';

const initialState = {
  name: '',
  _id: '',
  token: '',
  status: StatusForAll.init,
  isLogin: false,
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
      state.token = action.payload.token;
      state.isLogin = true;
    },
    [loginUserOperation.rejected](state) {
      state.status = StatusForAll.error;
      state.name = '';
      state._id = '';
      state.token = '';
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
    [registerUserOperation.pending](state) {
      state.status = StatusForAll.loading;
    },
    [registerUserOperation.fulfilled](state, action) {
      state.status = StatusForAll.success;
      state.name = action.payload.name;
      state._id = action.payload._id;
      state.token = action.payload.token;
    },
    [registerUserOperation.rejected](state) {
      state.status = StatusForAll.error;
      state.name = '';
      state._id = '';
      state.token = '';
    },
    // [currentUser.pending](state) {
    //   state.status = StatusForAll.loading;
    // },
    // [currentUser.fulfilled](state, action) {
    //   state.status = StatusForAll.success;
    //   state.name = action.payload.name;
    //   state._id = action.payload._id;
    //   // state.token = action.payload.token;
    // },
    // [currentUser.rejected](state) {
    //   state.status = StatusForAll.error;
    //   state.name = '';
    //   state._id = '';
    //   state.token = '';
    // },

    [currentUserOperation.pending](state) {
      state.status = StatusForAll.loading;
    },
    [currentUserOperation.fulfilled](state, { payload }) {
      state.name = payload.name;
      state._id = payload._id;
      state.status = StatusForAll.success;
    },
    [currentUserOperation.rejected](state) {
      state.status = StatusForAll.error;
    },
  },
});
export default authSlice.reducer;
