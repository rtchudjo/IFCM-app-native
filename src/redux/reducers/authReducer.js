// authReducer.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  uid: null,
  email: null,
  displayName: null,
  lastName:null,
  name:null,
  age: null,
  branch:  null,
  country:  null,
  gender: null,
  photoURL: null,

};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action) => {
      const { uid, email, displayName,lastName,name,age,branch,country,gender,photoURL} = action.payload;
      state.uid = uid;
      state.email = email;
      state.displayName = displayName;
      state.lastName = lastName;
      state.name = name;
      state.age = age;
      state.branch = branch;
      state.country = country;
      state.gender = gender;
      state.photoURL = photoURL;

    },
    logout: (state) => {
      state.uid = null;
      state.email = null;
      state.displayName = null;
      state.lastName = null;
      state.name = null;
      state.age = null;
      state.branch = null;
      state.country = null;
      state.gender = null;
      state.photoURL = null;
    },
  },
});

export const { setUser, logout } = authSlice.actions;
export default authSlice.reducer;
