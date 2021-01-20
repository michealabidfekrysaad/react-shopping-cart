import { combineReducers } from "redux";

import ProductsReducer from "./Products";
import CartReducer from "./Cart";
import { loader } from "./Loader";

export default combineReducers({
  ProductsReducer,
  loader,
  CartReducer,
});
