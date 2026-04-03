import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

export interface BannerState {
  bannerData: any;
}

const initialState: BannerState = {
  bannerData: [],
};

export const bannerSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    setBannerData: (state, action: PayloadAction<number>) => {
      state.bannerData = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setBannerData } = bannerSlice.actions;

export default bannerSlice.reducer;
