import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  branchesData: [],
};

const branchesSlice = createSlice({
  name: 'branches',
  initialState,
  reducers: {
    setBranchesData: (state, action) => {
      state.branchesData = action.payload;
    },
  },
});

export const { setBranchesData } = branchesSlice.actions;
export default branchesSlice.reducer;
