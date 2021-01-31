import {
  decreaseQuantity,
  increaseQuantity,
} from "../store/actions/Cart";
import store from "../store/Index";

export const IncreaseQuantityCart = (product) => {
  product.qty += 1;
  product.total += product.price;
  store.dispatch(increaseQuantity(product));
};

export const decreaseQuantityCart = (product) => {
  product.qty -= 1;
  product.total = product.qty * product.price;
  store.dispatch(decreaseQuantity(product));
};

export const deleteProductCart = (product) => {
  return product;
};
