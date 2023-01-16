import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

axios.defaults.baseURL = 'https://petssupportapi.onrender.com';

export const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

// register
export async function postRegistartionUser(user) {
  try {
    const { data } = await axios.post('/auth/registration/', user);
    return data;
  } catch (e) {
    toast.error(e.response.data.message, {
      position: 'top-right',
    });
  }
}

export const register = createAsyncThunk(
  '/auth/registration/',
  async (data, thunkAPI) => {
    try {
      const response = await postRegistartionUser(data);
      return response;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

// login

// const handlesetDataToApiWithId = createAsyncThunk(
//   'user/daily-rate-id',
//   async ({ body, userid }, { getState, rejectWithValue }) => {
//     try {
//       const { data } = await axios.post('/daily-rate/' + userid, body);

//       return data;
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );

export async function postLogin(body) {
  try {
    const { data } = await axios.post('/auth/login/', body);
    return data;
  } catch (e) {
    toast.error(e.response.data.message, {
      position: 'top-right',
    });
  }
}

export const login = createAsyncThunk(
  '/auth/login',
  async (data, { getState, dispatch, rejectWithValue }) => {
    // const userData = getState().user.userData;
    try {
      const response = await postLogin(data);
      console.log(data);
      // token.set(response.accessToken);
      // const isUserDataFilled =
      //   userData.weight &&
      //   userData.height &&
      //   userData.age &&
      //   userData.bloodType;

      // if (!response.dailyRate && isUserDataFilled) {
      //   dispatch(
      //     handlesetDataToApiWithId({
      //       body: omit(userData, 'notAllowedProducts', 'dailyRate'),
      //       userid: response.user.id,
      //     })
      //   );
      // }
      return response;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);
//

export async function postLogout() {
  const { data } = await axios.post('/auth/logout/');
  return data;
}

export async function getUserdata() {
  const { data } = await axios.get('/auth/current/');
  return data;
}
