import { createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import reducer from "./reducers/reducer";
import productReducer from "./reducers/productReducer";

let store = createStore(productReducer, applyMiddleware(thunk));

export default store;
