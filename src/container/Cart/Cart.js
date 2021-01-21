import React from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  removeFromCart,
} from "../../store/actions/Cart";
import {
  decreaseQuantity,
  increaseQuantity,
} from "../../store/actions/Products";

import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Btn from "../../component/Btn/Btn";

import "./Cart.scss";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  align: {
    textAlign: "left",
  },
});

const Cart = (props) => {
  const history = useHistory();

  const { removeFromCart, increaseQuantity, decreaseQuantity } = props;

  const classes = useStyles();
  const handleIncrease = (prod) => {
    increaseQuantity(prod);
  };

  const handleDecrease = (prod) => {
    decreaseQuantity(prod);
  };

  const handleDelete = (product) => {
    removeFromCart(product);
  };
  const handleSubmit = () => {
    history.push("/order");
  };

  return props.products.length !== 0 ? (
    <div className="container-fluid cart-section">
      <TableContainer component={Paper} className={classes.align}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow className={classes.align}>
              <TableCell>Image</TableCell>
              <TableCell>title</TableCell>
              <TableCell>Qty</TableCell>
              <TableCell>Total</TableCell>
              <TableCell>&nbsp;</TableCell>
              <TableCell>&nbsp;</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.products.map((prod) => {
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
                        size= "small"
                        variant= "contained"
                        color= "secondary"
                        content= "-"
                        handleClick= {() => handleDecrease(prod)}
                    />
                    &nbsp;
                    <Btn
                        size= "small"
                        variant= "contained"
                        color= "primary"
                        content= "+"
                        handleClick= {() => handleIncrease(prod)}
                    />
                  </TableCell>
                  <TableCell>
                    <Btn
                        size= "small"
                        variant= "contained"
                        color= "secondary"
                        content= "Remove"
                        handleClick= {() => handleDelete(prod)}
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
            size= "small"
            variant= "outlined"
            color= "default"
            content= "Submit"
            handleClick= {() => handleSubmit()}
        />
        &nbsp;
      </div>
    </div>
  ) : (
    <div>You have no products go add to cart</div>
  );
};

const mapStateToProps = ({ CartReducer }) => {
  return {
    products: CartReducer.products,
  };
};

export default connect(mapStateToProps, {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
})(Cart);
