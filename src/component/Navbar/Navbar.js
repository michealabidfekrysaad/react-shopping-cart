import React from "react";
import Icon from "@material-ui/core/Icon";
import RemoveIcon from "@material-ui/icons/Remove";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./Navbar.scss";
import { Home, ShoppingCart } from "@material-ui/icons";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import Btn from "../Btn/Btn";
import { removeFromCart } from "../../store/actions/Cart";
import { decreaseQuantity, increaseQuantity } from "../../store/actions/Products";

const Navbar = ({
  total,
  products,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
}) => {
  const increaseProductQty = (prod) => {
    increaseQuantity(prod);
  };

  const decreaseProductQty = (prod) => {
    decreaseQuantity(prod);
  };

  const deleteProductFromCart = (product) => {
    removeFromCart(product);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light topnav">
      <Link to="/" className="links">
        <Home fontSize="large" />
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className="collapse navbar-collapse my-flex-box"
        id="navbarSupportedContent"
      >
        <ul className="navbar-nav">
          <li className="nav-item active">
            <Link className="links" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="links" to="/cart">
              Cart
            </Link>
          </li>
        </ul>
        <ul className="navbar-nav">
          <li className="nav-item dropdown">
            <Link
              to=""
              className="nav-link my-dropdown-toggle"
              id="cartDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <ShoppingCart fontSize="large" />
              <span>{total}</span>
            </Link>
            <div className="dropdown-menu" aria-labelledby="cartDropdown">
              {products.length ? (
                <>
                  {products.map((product) => {
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
                  <Link to="/cart">
                    <Btn
                      size="small"
                      variant="outlined"
                      color="primary"
                      content="Review order"
                    />
                  </Link>
                </>
              ) : (
                <p>you have no product</p>
              )}
            </div>
          </li>
          <li className="nav-item dropdown">
            <Link
              to=""
              className="nav-link my-dropdown-toggle"
              id="profileDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <AccountCircleIcon fontSize="large" />
            </Link>
            <div className="dropdown-menu" aria-labelledby="profileDropdown">
              <Link className="dropdown-item" to="">
                View / Edit Profile
              </Link>
              <Link className="dropdown-item" to="">
                Sign out
              </Link>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

const mapStateToProps = (state) => {
  return {
    total: state.CartReducer.total,
    products: state.CartReducer.products,
  };
};

export default connect(mapStateToProps, {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
})(Navbar);
