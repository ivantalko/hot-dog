import { createSlice } from '@reduxjs/toolkit';
import { loginUserOperation } from '../Auth/auth-operations';
import { StatusForAll } from '../status';
import { getUserOperation, putUpdateUser } from './user-operation';

const initialState = {
  favoriteNotices: '',
  ownNotices: '',
  _id: '',
  email: '',
  name: '',
  phone: '',
  avatarURL: '',
  location: '',
  pets: '',
  notice: '',
  birthday: '',
  token: '',

  status: StatusForAll.init,
};
const userSlice = createSlice({
  name: 'user',
  initialState,
  extraReducers: {
    [getUserOperation.pending](state) {
      state.status = StatusForAll.loading;
    },
    [getUserOperation.fulfilled](state, action) {
      state.status = StatusForAll.success;
      state.email = action.payload.email;
      state.name = action.payload.name;
      state._id = action.payload._id;
      state.phone = action.payload.phone;
      state.pets = action.payload.pets;
      state.avatarURL = action.payload.avatarURL;
      state.notice = action.payload.notice;
      state.birthday = action.payload.birthday;
      state.token = action.payload.token;
      state.location = action.payload.location;
    },
    [getUserOperation.rejected](state) {
      state.status = StatusForAll.error;
    },
    [loginUserOperation.fulfilled](state, action) {
      state.status = StatusForAll.success;
      state.email = action.payload.email;
      state.name = action.payload.name;
      state._id = action.payload._id;
      state.phone = action.payload.phone;
      state.pets = action.payload.pets;
      state.avatarURL = action.payload.avatarURL;
      state.notice = action.payload.notice;
      state.birthday = action.payload.birthday;
      state.token = action.payload.token;
      state.location = action.payload.location;
    },
    [loginUserOperation.rejected](state) {
      state.status = StatusForAll.error;
    },
    [putUpdateUser.pending](state) {
      state.status = StatusForAll.loading;
    },
    [putUpdateUser.fulfilled](state, action) {
      state.email = action.payload.email;
      state.name = action.payload.name;
      state.phone = action.payload.phone;
      state.birthday = action.payload.birthday;
      state.location = action.payload.location;
    },
    [putUpdateUser.rejected](state) {
      state.status = StatusForAll.error;
    },
  },
});
export default userSlice.reducer;
