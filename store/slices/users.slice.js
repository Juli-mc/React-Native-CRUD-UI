import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const usersSlice = createSlice({
  name: "users",
  initialState: [],
  reducers: {
    setUsers: (state, action) => {
      const users = action.payload;
      return users;
    },
  },
});

export const getUsersThunk = createAsyncThunk(async (data, thunkAPI) => {
  const config = {
    method: "get",
    url: "https://dummyapi.io/data/v1/user?limit=10",
    headers: {
      "app-id": "63473330c1927d386ca6a3a5",
    },
    data: data,
  };

  const response = await axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
  return response.data;
});

export const { setUsers } = usersSlice.actions;

export default usersSlice.reducer;
