// Api

// axios.defaults.baseURL = 'https://connections-api.herokuapp.com';





// апи используется в операции

// operathion

// import { createAsyncThunk } from '@reduxjs/toolkit';
// import { getContacts } from '../../helpers/Api';

// export const getContactsData = createAsyncThunk(
//   'phonebook/fetchAll',
//   async (_, thunkAPI) => {
//     try {
//       const response = await getContacts();
//       return response;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

// операции используются в слайсах


// import { createSlice } from '@reduxjs/toolkit';
// import { getContactsData } from './operathion';
// const Status = {
//   init: 'INIT',
//   loading: 'LOADING',
//   success: 'SUCCESS',
//   error: 'ERROR',
// };

// const initialState = {
//   items: [],
//   status: Status.init,
//   error: null,
// };

// const phonebookSlice = createSlice({
//   name: 'phonebook',
//   initialState,

//   extraReducers: {
//     [getContactsData.pending](state) {
//       state.status = Status.loading;
//     },

//     [getContactsData.fulfilled](state, action) {
//       state.status = Status.success;
//       state.items = [...action.payload];
//     },

//     [getContactsData.rejected](state) {
//       state.status = Status.error;
//     },
//   },
// });


// export default phonebookSlice.reducer;


// лайс используется в рутредьюсе


// import storage from 'redux-persist/lib/storage';
// import persistReducer from 'redux-persist/es/persistReducer';
// import registrReducer from './PhoneBookRedux/Registraishon/RegSlice';
// import filterReducer from "./PhoneBookRedux/FilterSlice";
// import phonebookReducer from "./PhoneBookRedux/phonebookSlice"
// import { combineReducers } from 'redux';

// const persistConfig = {
//   key: 'notes',
//   storage,
//   whitelist: ['token'],
// };
// const persistedRegistrReducer = persistReducer(persistConfig, registrReducer);

// export const rootReducer = combineReducers({
//   phonebook: phonebookReducer,
//   filter: filterReducer,
//   registr: persistedRegistrReducer,
// });



// используется на странице

// import { ContactForm } from 'components/ContactForm/ContactForm';
// import { ContactList } from 'components/ContactList/ContactList';
// import { Filter } from 'components/Filter/Filter';
// import { getContactsData } from 'redux/PhoneBookRedux/operathion';

// const { useEffect } = require('react');
// const { useDispatch } = require('react-redux');


// const Phonebook = () => {
//   const dispatch = useDispatch();
//   useEffect(() => {
//     dispatch(getContactsData());
//   }, [dispatch]);

//   return (
//     <div
//       style={{
//         display: 'flex',
//         flexWrap: 'nowrap',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101',
//         flexDirection: 'column',
//         margin: '30px',
//       }}
//     >
//       <h1>Phonebook</h1>
//       <ContactForm />
//       <h2>Contacts</h2>
//       <Filter />
//       <ContactList />
//     </div>
//   );
// };


// export default Phonebook