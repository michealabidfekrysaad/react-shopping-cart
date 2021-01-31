import React from "react";
import { useHistory } from "react-router-dom";
import {
  removeFromCart,
  // decreaseQuantity,
  // increaseQuantity,
} from "../../store/actions/Cart";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Btn from "../../component/Btn/Btn";
import { useSelector, useDispatch } from "react-redux";
import "./Cart.scss";
import { decreaseQuantityCart, IncreaseQuantityCart } from "../../utils/shared";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  align: {
    textAlign: "left",
  },
});

const Cart = () => {
  const history = useHistory();
  const CartReducer = useSelector((state) => state.CartReducer);
  const dispatch = useDispatch();

  const classes = useStyles();
  const increaseProduct = (product) => {
    IncreaseQuantityCart(product);
  };

  const decreaseProduct = (product) => {
    if (product.qty !== 1) {
      decreaseQuantityCart(product);
    }
  };

  const deleteProduct = (product) => {
    // ana hena 3ashan a3mel function fe  el shared.js file
    // lazem a3mel henak  import lel CartReducer 3ashan keda ana sayebha hena
    // wala fe fekra tania ???
    let newProducts = CartReducer.products.filter(
      (singleProduct) => singleProduct.id !== product.id
    );
    let reduceQty = product.qty;
    CartReducer.total -= reduceQty;
    dispatch(removeFromCart(newProducts));
  };

  const handleSubmit = () => {
    history.push("/order");
  };

  return CartReducer.products.length !== 0 ? (
    <div className="container-fluid cart-section">
      <TableContainer component={Paper} className={classes.align}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow className={classes.align}>
              <TableCell>Image</TableCell>
              <TableCell>title</TableCell>
              <TableCell>Qty</TableCell>
              <TableCell>Total</TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {CartReducer.products.map((prod) => {
              return (
                <TableRow key={prod.id}>
                  <TableCell component="th" className="prod-cell" scope="row">
                    <img
                      className="prod-image"
                      src={prod.image}
                      alt={prod.title}
                    />
                  </TableCell>
                  <TableCell className="prod-title">{prod.title}</TableCell>
                  <TableCell>
                    {prod.qty} * {prod.price}
                  </TableCell>
                  <TableCell className="prod-total">{prod.total}</TableCell>
                  <TableCell>
                    <Btn
                      size="small"
                      variant="contained"
                      color="secondary"
                      content="-"
                      handleClick={() => decreaseProduct(prod)}
                    />
                    &nbsp;
                    <Btn
                      size="small"
                      variant="contained"
                      color="primary"
                      content="+"
                      handleClick={() => increaseProduct(prod)}
                    />
                  </TableCell>
                  <TableCell>
                    <Btn
                      size="small"
                      variant="contained"
                      color="secondary"
                      content="Remove"
                      handleClick={() => deleteProduct(prod)}
                    />
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <div className="submit-div">
        <Btn
          size="small"
          variant="outlined"
          color="default"
          content="Submit"
          handleClick={() => handleSubmit()}
        />
        &nbsp;
      </div>
    </div>
  ) : (
    <div>You have no products go add to cart</div>
  );
};

export default Cart;
