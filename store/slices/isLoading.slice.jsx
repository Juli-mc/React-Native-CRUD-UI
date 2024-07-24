import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

//Global state for turn off/on screen loading.

export const isLoadingSlice = createSlice({
  name: "isLoading",
  initialState: false,
  reducers: {
    setIsLoading: (state, action) => {
      const isLoading = action.payload;
      return isLoading;
    },
  },
});

export const { setIsLoading } = isLoadingSlice.actions;

export default isLoadingSlice.reducer;
