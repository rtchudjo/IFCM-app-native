
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';
import thunk from 'redux-thunk'; // Importez Redux Thunk

const store = configureStore({
  reducer: rootReducer,
  middleware: [...getDefaultMiddleware(), thunk], // Ajoutez Redux Thunk au middleware

});

export default store;
