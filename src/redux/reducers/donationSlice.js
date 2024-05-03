// donationSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  donationData: [
    
  ],
};

const donationSlice = createSlice({
  name: 'donation',
  initialState,
  reducers: {
    setDonationData: (state, action) => {
      state.donationData = action.payload;
    },
  },
});

export const { setDonationData } = donationSlice.actions;
export default donationSlice.reducer;
