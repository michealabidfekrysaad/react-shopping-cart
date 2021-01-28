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
  export const resetCart = () => {
    return {
      type: types.RESET_CART,
    };
  };

  export const decreaseQuantity = payload => {
    return {
      type: types.SUB_QUANTITY,
      payload,
    };
  };
  export const increaseQuantity = payload => {
    return {
      type: types.ADD_QUANTITY,
      payload,
    };
  };