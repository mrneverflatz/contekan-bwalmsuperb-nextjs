import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: null,
  profile: null,
};

export const slices = createSlice({
  name: "users",
  initialState,
  reducers: {
    login: (state, action) => {
      state.token = action.payload.token;
      state.profile = action.payload.profile;
    },
    logout: (state) => {
      state = initialState;
    },
  },
});

export const { login, logout } = slices.actions;

export default slices.reducer;
