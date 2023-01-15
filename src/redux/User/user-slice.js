import { createSlice } from '@reduxjs/toolkit';
import { loginUserOperation } from '../Auth/auth-operations';
import { StatusForAll } from '../status';
import { getUserOperation } from './user-operation';

const initialState = {
  _id: null,
  email: null,
  name: null,
  phone: null,
  avatarURL: null,
  location: null,
  pets: null,
  notice: null,
  birthday: null,
  token: null,

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
    },
  },
});
export default userSlice.reducer;
