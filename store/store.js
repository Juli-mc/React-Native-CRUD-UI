import { configureStore } from "@reduxjs/toolkit";
import usersSlice from "./slices/users.slice";
import isLoadingSlice from "./slices/isLoading.slice";

export default configureStore({
  reducer: {
    user: usersSlice,
    isLoading: isLoadingSlice,
  },
});
