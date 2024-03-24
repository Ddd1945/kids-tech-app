import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

const SideBarSlice = createSlice({
  name: 'sideBar',

  initialState: {
    choosenTag: 0,
  },

  reducers: {
    setChoosenTag: (state, action) => {
      state.choosenTag = action.payload;
    },
  },
});

export const getChoosenTag = (state: RootState) => state.sideBar.choosenTag;
export const { setChoosenTag } = SideBarSlice.actions;
export const sideBarReducer = SideBarSlice.reducer;
