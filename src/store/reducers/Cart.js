import * as types from "../types/Cart";
// import * as typesProduct from "../types/Products";

const initialState = {
  products: [],
  total: 0,
};

export const CartReducer = (state = initialState, action) => {
  // console.log(action);
  let product = action.payload;
  switch (action.type) {
    case types.ADD_TO_CART:

      if (product) {
        return {
          ...state,
          total: state.total + 1,
          products: [...state.products, product],
        };
      } else {
        return {
          ...state,
          total: state.total + 1,
          products: [...state.products],
        };
      }

    case types.REMOVE_FROM_CART:
      return {
        ...state,
        products: product,
      };

    case types.ADD_QUANTITY:
      return {
        ...state,
        total: state.total + 1,
        products: [...state.products],
      };

    case types.SUB_QUANTITY:
      return {
        ...state,
        total: state.total - 1,
        products: [...state.products],
      };

    case types.RESET_CART:
      return initialState;

    default:
      return state;
  }
};
export default CartReducer;
