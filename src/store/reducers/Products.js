import * as types from "../types/Products";

const INITIAL_SATE = {};

export const ProductsReducer = (state = INITIAL_SATE, action) => {
  switch (action.type) {
    case types.GET_PRODUCTS_RECEIVE:
      return action.payload;
      case types.GET_PRODUCTS_DETAILS_RECEIVE:
      return action.payload;
    default:
      return state;
  }
};

export default ProductsReducer;
