import * as types from "../types/Cart";

export const AddToCart = product => {
    return {
      type: types.ADD_TO_CART,
      product
    };
  };
  export const removeFromCart = product => {
    return {
      type: types.REMOVE_FROM_CART,
      product,
    };
  };
  export const emptyCart = () => {
    return {
      type: types.EMPTY_CART,
    };
  };