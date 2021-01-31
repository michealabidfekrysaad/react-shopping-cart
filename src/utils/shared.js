import {
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
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
  let { CartReducer } = store.getState();
  let newProducts = CartReducer.products.filter(
    (singleProduct) => singleProduct.id !== product.id
  );
  let reduceQty = product.qty;
  CartReducer.total -= reduceQty;
  store.dispatch(removeFromCart(newProducts));
};
