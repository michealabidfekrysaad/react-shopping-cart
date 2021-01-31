import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

import { Link } from "react-router-dom";
import { Home, ShoppingCart } from "@material-ui/icons";
import { useSelector } from "react-redux";
import { IncreaseQuantityCart, decreaseQuantityCart,  deleteProductCart } from "../../utils/shared";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import Icon from "@material-ui/core/Icon";
import RemoveIcon from "@material-ui/icons/Remove";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import Dropdown from "../Dropdown/Dropddown";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
  },
  dropdown: {
    position: "absolute",
    top: 33,
    left: -389,
    right: 0,
    border: "1px solid",
    padding: 8,
    zIndex: 1,
    backgroundColor: "#fff",
    color: "black",
    width: 400,
  },
  grow: {
    flexGrow: 1,
  },
  title: {
    display: "none",
    [theme.breakpoints.down("xl")]: {
      display: "block",
    },
  },
  sectionDesktop: {
    display: "flex",
    [theme.breakpoints.down("xl")]: {
      display: "flex",
    },
  },
}));

const Navbar = () => {
  const CartReducer = useSelector((state) => state.CartReducer);

  const increaseProductQty = (product) => {
    IncreaseQuantityCart(product);
  };

  const decreaseProductQty = (product) => {
    if (product.qty !== 1) {
      decreaseQuantityCart(product);
    }
  };

  const deleteProductFromCart = (product) => {
    deleteProductCart(product)

  };

  const classes = useStyles();

  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar>
          <Typography className={classes.title} variant="h6" noWrap>
            <Link to="/" className="links">
              <Home fontSize="large" />
            </Link>
          </Typography>
          <Typography className={classes.title} variant="h6" noWrap>
            <Link to="/" className="links">
              Home
            </Link>
          </Typography>
          <Typography className={classes.title} variant="h6" noWrap>
            <Link to="/cart" className="links">
              Cart
            </Link>
          </Typography>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <Dropdown
              badgeContent={CartReducer.total}
              screenAppear={<ShoppingCart fontSize="large" />}
              DropdownBody={
                CartReducer.products.length !== 0 ? (
                  CartReducer.products.map((product) => {
                    return (
                      <React.Fragment key={product.id}>
                        <p
                          className="product-actions"
                          onClick={() => decreaseProductQty(product)}
                        >
                          <RemoveIcon
                            style={{ fontSize: 20 }}
                            color="primary"
                          ></RemoveIcon>
                        </p>
                        <img
                          className="cart-image"
                          src={product.image}
                          alt={product.title}
                        />
                        with Qty: {product.qty}
                        <p
                          className={`product-actions`}
                          onClick={() => increaseProductQty(product)}
                        >
                          <Icon style={{ fontSize: 20 }} color="primary">
                            add_circle
                          </Icon>
                        </p>
                        <p
                          className="product-actions"
                          onClick={() => deleteProductFromCart(product)}
                        >
                          <DeleteForeverIcon
                            style={{ fontSize: 20 }}
                            color="primary"
                          />
                        </p>
                        <br />
                      </React.Fragment>
                    );
                  })
                ) : (
                  <p>no product added</p>
                )
              }
            />
            <Dropdown
              screenAppear={<AccountCircleIcon fontSize="large" />}
              DropdownBody={
                <>
                  <Link className="dropdown-item" to="">
                    View / Edit Profile
                  </Link>
                  <br />
                  <Link className="dropdown-item" to="">
                    Sign out
                  </Link>
                </>
              }
            />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
