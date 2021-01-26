import React, { useEffect, useState } from "react";
import * as types from "../../store/types/Cart";
import * as typesProduct from "../../store/types/Products";
import { useSelector, useDispatch } from "react-redux";
// import { ProductsRequest } from "../../store/actions/Products";
// import { AddToCart } from "../../store/actions/Cart";
// import { connect } from "react-redux";
import loader from "../../../src/assets/loader.svg";
import { useHistory } from "react-router-dom";

import Product from "../../component/Product/Product";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Btn from "../../component/Btn/Btn";
import Pagination from "../../component/Pagination/Pagination";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    paddingTop: 20,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  rootCard: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
}));

const Products = (props) => {
  const products = useSelector((state) => state.ProductsReducer);
  const loading = useSelector((state) => state.loader);
  const cartProducts = useSelector((state) => state.CartReducer);
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const [ProductsPerPage] = useState(4);
  const indexOfLastProduct = currentPage * ProductsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - ProductsPerPage;
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const classes = useStyles();
  const history = useHistory();

  useEffect(() => {
    dispatch({
      type: typesProduct.GET_PRODUCTS_REQUEST,
    });
  }, [dispatch]);

  let currentProducts = 0;
  products.length &&
    (currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct));

  const addProdToCart = (product) => {
    let existed_item = cartProducts.products.find(
      (singleProduct) => singleProduct.id === product.id
    );
    if (existed_item) {
      existed_item.qty += 1;
      existed_item.total += existed_item.price;
      // AddToCart("");
      dispatch({
        type: types.ADD_TO_CART,
      });
    } else {
      product.qty = 1;
      product.total = product.price;
      // AddToCart(product);
      dispatch({
        type: types.ADD_TO_CART,
        payload: product,
      });
    }
    history.push("/cart");
  };

  const goToProductDetails = (prod) => {
    history.push({
      pathname: `/product-details/${prod.id}`,
      state: `${prod.id}`,
    });
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid container item xs={12} spacing={3}>
          {currentProducts.length ? (
            currentProducts.map(({ id, title, description, image, price }) => {
              return (
                <Grid item xs={3} key={id}>
                  <Paper className={classes.paper}>
                    <Product
                      cardInfo={{
                        id,
                        image,
                        title,
                        description,
                        price,
                        addProdToCart,
                      }}
                    />
                    <hr />
                    <Btn
                      size="small"
                      variant="outlined"
                      color="secondary"
                      content="Details"
                      handleClick={() =>
                        goToProductDetails({
                          id,
                          title,
                          description,
                          image,
                          price,
                        })
                      }
                    />
                  </Paper>
                </Grid>
              );
            })
          ) : loading ? (
            <div className="loader">
              <img src={loader} alt="My logo" />
            </div>
          ) : null}
          {products.length && (
            <div className="container-fluid-pagination">
            <Pagination
              productsPerPage={4}
              totalProducts={products.length}
              paginate={paginate}
            />
            </div>
          )}
        </Grid>
      </Grid>
    </div>
  );
};

// const mapStateToProps = (state) => {
//   return {
//     // products: state.ProductsReducer,
//     // loading: state.loader,
//     // cartProducts: state.CartReducer,
//   };
// };

// export default connect(null, {
//   ProductsRequest,
//   AddToCart,
// })(Products);

export default Products;
