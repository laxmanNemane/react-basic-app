import { createSlice } from "@reduxjs/toolkit";

const AuthSlice = createSlice({
  name: "Auth",
  initialState: {
    AuthUser: JSON.parse(localStorage.getItem("userAuth"))
      ? JSON.parse(localStorage.getItem("userAuth"))
      : [],
    isLoggedIn: false,
    status: "idle",
  },
  reducers: {
    Login: (state, action) => {
      state.AuthUser = action.payload;
      state.isLoggedIn = true;
    },
    LogOut: (state, action) => {
      state.isLoggedIn = false;
    },
  },
});

export const { Login, LogOut } = AuthSlice.actions;
export default AuthSlice.reducer;
