import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  username: "",
  email: "",
  id: "",
  country: "",
  city: "",
  phone: "",
  image: "",
  age: "",
  isAdmin: "",
};

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    setUser: (state, action) => action.payload,
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
