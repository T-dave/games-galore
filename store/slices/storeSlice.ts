import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

export interface StoreState {
  storeData: any;
  topDealsData: any;
}

const initialState: StoreState = {
  storeData: [],
  topDealsData: [],
};

export const storeSlice = createSlice({
  name: "store",
  initialState,
  reducers: {
    setStoreData: (state, action: PayloadAction<any>) => {
      state.storeData = action.payload;
    },
    setTopDealsData: (state, action: PayloadAction<any>) => {
      state.topDealsData = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setStoreData, setTopDealsData } = storeSlice.actions;

export default storeSlice.reducer;
