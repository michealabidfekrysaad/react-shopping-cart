import * as types from "../types/Cart";

export const AddToCart = payload => {
    return {
      type: types.ADD_TO_CART,
      payload
    };
  };
  export const removeFromCart = payload => {
    return {
      type: types.REMOVE_FROM_CART,
      payload,
    };
  };
  export const emptyCart = () => {
    return {
      type: types.EMPTY_CART,
    };
  };