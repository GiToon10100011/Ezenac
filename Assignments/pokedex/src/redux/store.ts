import { applyMiddleware } from "redux";
import rootReducer from "./reducers/reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import { thunk } from "redux-thunk";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: rootReducer,
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
