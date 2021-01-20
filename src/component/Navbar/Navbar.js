import React from "react";
import { connect } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import "./Navbar.scss";
import { Home, ShoppingCart } from "@material-ui/icons";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import Btn from "../Btn/Btn";
import {
  removeFromCart,
  addQuantity,
  subtractQuantity,
} from "../../store/actions/Cart";


const Navbar = (props) => {
  const history = useHistory();

  const {
    total,
    products,
    removeFromCart,
    addQuantity,
    subtractQuantity,
  } = props;


  const handleIncrease = (prod) => {
    addQuantity(prod);
  };

  const handleDecrease = (prod) => {
    subtractQuantity(prod);
  };

  const handleDelete = (product) => {
    removeFromCart(product);
  };
  const handleSubmit = () => {
    history.push("/cart");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light topnav">
      <Link to={"/"} className="links">
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
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link className="links" to={"/"}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="links" to={"/cart"}>
              Cart
            </Link>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item dropdown">
              <Link
              to={""}
                className="nav-link my-dropdown-toggle"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <ShoppingCart fontSize="large" />
                <span>{total}</span>
              </Link>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                {products.length ? (
                  <div>
                    {products.map((product) => {
                      return (
                        <React.Fragment key={product.id}>
                          <p
                            className="product-actions"
                            onClick={() => handleDecrease(product)}
                          >
                            -
                          </p>
                          <img
                            className="cart-image-in-dropdown"
                            src={product.image}
                            alt={product.title}
                          />
                          with Qty: {product.qty}
                          <p
                            className="product-actions"
                            onClick={() => handleIncrease(product)}
                          >
                            +
                          </p>
                          <p
                            className="product-actions"
                            onClick={() => handleDelete(product)}
                          >
                            remove
                          </p>
                        </React.Fragment>
                      );
                    })}
                    <Btn
                      btnInfo={{
                        size: "small",
                        variant: "outlined",
                        color: "primary",
                        content: "Review order",
                        handleClick: () => handleSubmit(),
                      }}
                    />
                  </div>
                ) : (
                  <p>you have no product</p>
                )}
              </div>
            </li>
            <li className="nav-item dropdown">
              <Link
              to={""}
                className="nav-link my-dropdown-toggle"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <AccountCircleIcon fontSize="large" />
              </Link>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link className="dropdown-item" to={""}>View / Edit Profile</Link>
                <Link className="dropdown-item" to={""}>Sign out</Link>
              </div>
            </li>
          </ul>
        </form>
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
  addQuantity,
  subtractQuantity,
})(Navbar);
