import * as types from "../types/Cart";

export const addToCartA = product => {
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
  export const subtractQuantity = product => {
    return {
      type: types.SUB_QUANTITY,
      product,
    };
  };
  export const addQuantity = product => {
    return {
      type: types.ADD_QUANTITY,
      product,
    };
  };
  export const emptyCart = () => {
    return {
      type: types.EMPTY_CART,
    };
  };