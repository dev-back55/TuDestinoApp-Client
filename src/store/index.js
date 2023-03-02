import { configureStore } from "@reduxjs/toolkit";
import user from "./slices/user.slice";
import search from "./slices/search.slice";

export default configureStore({
  reducer: {
    user,
    search,
  },
});
