import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Badge from "@material-ui/core/Badge";

import { Link } from "react-router-dom";
import { Home, ShoppingCart } from "@material-ui/icons";
import {
  decreaseQuantity,
  increaseQuantity,
} from "../../store/actions/Products";
import { useSelector, useDispatch } from "react-redux";
import { increaseQuantityCart, decreaseQuantityCart } from "../../utils/shared";
import { removeFromCart } from "../../store/actions/Cart";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import Icon from "@material-ui/core/Icon";
import RemoveIcon from "@material-ui/icons/Remove";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";

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
    display: "none",
    [theme.breakpoints.down("xl")]: {
      display: "block",
    },
  },
}));

const Navbar = () => {
  const CartReducer = useSelector((state) => state.CartReducer);
  const dispatch = useDispatch();

  const increaseProductQty = (product) => {
    dispatch(increaseQuantity(increaseQuantityCart(product)));
  };

  const decreaseProductQty = (product) => {
    if (product.qty !== 1) {
      dispatch(decreaseQuantity(decreaseQuantityCart(product)));
    }
  };

  const deleteProductFromCart = (product) => {
    let newProducts = CartReducer.products.filter(
      (singleProduct) => singleProduct.id !== product.id
    );
    let reduceQty = product.qty;
    CartReducer.total -= reduceQty;
    dispatch(removeFromCart(newProducts));
  };

  const classes = useStyles();

  const [open, setOpen] = React.useState(false);
  const [openProfile, setOpenProfile] = React.useState(false);

  const handleClickCart = () => {
    setOpen((prev) => !prev);
  };

  const handleClickAwayCart = () => {
    setOpen(false);
  };

  const handleClick = () => {
    setOpenProfile((prev) => !prev);
  };

  const handleClickAway = () => {
    setOpenProfile(false);
  };

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
            <ClickAwayListener onClickAway={handleClickAwayCart}>
              <IconButton aria-label="show 4 new mails" color="inherit">
                <Badge badgeContent={CartReducer.total} color="secondary">
                  <ShoppingCart fontSize="large" onClick={handleClickCart} />
                  {open && CartReducer.products.length && (
                    <div className={classes.dropdown}>
                      {CartReducer.products.map((product) => {
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
                      })}
                      <Link to="/cart">Review Order</Link>
                    </div>
                  )}
                </Badge>
              </IconButton>
            </ClickAwayListener>
            <ClickAwayListener onClickAway={handleClickAway}>
              <IconButton
                aria-label="show 17 new notifications"
                color="inherit"
                onClick={handleClick}
              >
                <AccountCircleIcon fontSize="large" />
                {openProfile ? (
                  <div className={classes.dropdown}>
                    <Link className="dropdown-item" to="">
                      View / Edit Profile
                    </Link>
                    <br />
                    <Link className="dropdown-item" to="">
                      Sign out
                    </Link>
                  </div>
                ) : null}
              </IconButton>
            </ClickAwayListener>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
