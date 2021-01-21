import * as types from "../types/Cart";
import * as typesProduct from "../types/Products";

const initialState = {
  products: [],
  total: 0,
};

export const CartReducer = (state = initialState, action) => {
  let product = action.payload;
  switch (action.type) {
    case types.ADD_TO_CART:
      let existed_item = state.products.find(
        (singleProduct) => singleProduct.id === product.id
      );
      if (existed_item) {
        existed_item.qty += 1;
        existed_item.total += existed_item.price;
        return {
          ...state,
          total: state.total + 1,
          products: [...state.products],
        };
      } else {
        product.qty = 1;
        product.total = product.price;
        return {
          ...state,
          total: state.total + 1,
          products: [...state.products, product],
        };
      }

    case types.REMOVE_FROM_CART:
      
      let newProducts = state.products.filter(
        (singleProduct) => singleProduct.id !== product.id
      );
      let reduceQty = product.qty;
      return {
        ...state,
        total: state.total - reduceQty,
        products: newProducts,
      };


    case typesProduct.ADD_QUANTITY:
      return {
        ...state,
        total: state.total + 1,
        products: [...state.products],
      };


    case typesProduct.SUB_QUANTITY:
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
