
export const IncreaseQuantityCart = (product) => {
  product.qty += 1;
  product.total += product.price;
  return product;
  // const dispatch = useDispatch();
  // dispatch(
  //   increaseQuantity({
  //     ...product,
  //     qty: product.qty + 1,
  //     total: product.total + product.price,
  //   })
  // );
};


export const decreaseQuantityCart = (product) => {
  product.qty -= 1;
  product.total = product.qty * product.price;
  return product;
};

export const deleteProductCart = (product) => {
  return product;
};
