import { combineReducers } from "redux";
import authenticateReducer from "./authenticateReducer";
import productReducer from "./productReducer";

const rootReducer = combineReducers({
  auth: authenticateReducer,
  product: productReducer,
});

export default rootReducer;
