import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/users";

import { combineReducers } from "redux";

const reducers = combineReducers({
  users: userReducer,
});

const store = configureStore({
  reducer: reducers,
  //   devTools: process.env.NODE_ENV !== "production",
  middleware: [],
});

export default store;
