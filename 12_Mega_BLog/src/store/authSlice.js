import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userData: null,
  status: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.status = true;
      state.userData = action.payload;
    },
    logout: (state) => {
      state.userData = null;
      state.status = false;
    },
  },
});

export default authSlice.reducer;

export const { login, logout } = authSlice.actions;
