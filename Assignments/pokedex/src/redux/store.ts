import { applyMiddleware, createStore } from "redux";
import rootReducer from "./reducers/reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import { thunk } from "redux-thunk";

let store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
