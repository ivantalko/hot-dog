import { combineReducers } from '@reduxjs/toolkit';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';
import authReducer from './Auth/auth-slice';
import userReduser from './User/user-slice';
import noticeReduser from './Notice/notice-slice';

const persistRegistrConfig = {
  key: 'auth',
  storage,
  blacklist: ['status'],
};
const persistedRegistrReducer = persistReducer(
  persistRegistrConfig,
  authReducer
);

export const rootReducer = combineReducers({
  auth: persistedRegistrReducer,
  user: userReduser,
  notices: noticeReduser,
});
