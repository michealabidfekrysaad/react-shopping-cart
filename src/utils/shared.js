
export const increaseQuantityCart = (product) => {
  product.qty += 1;
  product.total += product.price;
  return product;
};
// dispatch(
//   increaseQuantity({
//     product,
//     qty: product.qty + 1,
//     total: product.total + product.price,
//   })
// );
// el mafrod akteb keda bs mosh sha3'ala leh b2a ????

export const decreaseQuantityCart = (product) => {
  product.qty -= 1;
  product.total = product.qty * product.price;
  return product;
};

export const deleteProductCart = (product) => {
  return product;
};
