import * as types from "../types/Products";

const INITIAL_SATE = {};
// const INITIAL_SATE = {
//   products: [],
//   total: 0,
// };

export const ProductsReducer = (state = INITIAL_SATE, action) => {
  // let product = action.payload;
  switch (action.type) {
    case types.GET_PRODUCTS_RECEIVE:
      return action.payload;
    case types.GET_PRODUCTS_DETAILS_RECEIVE:
      return action.payload;
    // case types.ADD_QUANTITY:
    //   return {
    //     ...state,
    //     total: state.total + 1,
    //     products: [...state.products],
    //   };
    // case types.SUB_QUANTITY:
    //   return {
    //     ...state,
    //     total: state.total - 1,
    //     products: [...state.products],
    //   };
    default:
      return state;
  }
};

export default ProductsReducer;
