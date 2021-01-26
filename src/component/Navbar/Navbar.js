import React from "react";
import Icon from "@material-ui/core/Icon";
import RemoveIcon from "@material-ui/icons/Remove";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import { Link } from "react-router-dom";
import "./Navbar.scss";
import { Home, ShoppingCart } from "@material-ui/icons";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import Btn from "../Btn/Btn";
import { removeFromCart } from "../../store/actions/Cart";
import {
  decreaseQuantity,
  increaseQuantity,
} from "../../store/actions/Products";
import { useSelector, useDispatch  } from "react-redux";
import { increaseQuantityCart, decreaseQuantityCart } from "../../utils/shared";


const Navbar = () => {

  const CartReducer = useSelector((state) => state.CartReducer);
  const dispatch = useDispatch();

  const increaseProductQty = (product) => {
    dispatch(increaseQuantity(increaseQuantityCart(product)))
  };

  const decreaseProductQty = (product) => {
    if (product.qty !== 1) {
      dispatch(decreaseQuantity(decreaseQuantityCart(product)))
    }
  };

  const deleteProductFromCart = (product) => {
    let newProducts = CartReducer.products.filter(
      (singleProduct) => singleProduct.id !== product.id
    );
    let reduceQty = product.qty;
    CartReducer.total -= reduceQty;
    // removeFromCart(newProducts);
    dispatch(removeFromCart(newProducts))
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
              <span>{CartReducer.total}</span>
            </Link>
            <div
              className="dropdown-menu"
              aria-labelledby="cartDropdown"
              onClick={(e) => e.stopPropagation()}
            >
              {CartReducer.products.length ? (
                <>
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

// const mapStateToProps = (state) => {
//   return {
//     // total: state.CartReducer.total,
//     // products: state.CartReducer.products,
//     // CartReducer: state.CartReducer,
//   };
// };

// export default connect(null, {
//   // removeFromCart,
//   // increaseQuantity,
//   // decreaseQuantity,
// })(Navbar);

 export default Navbar;