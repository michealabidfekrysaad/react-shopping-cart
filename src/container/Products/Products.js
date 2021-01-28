import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ProductsRequest } from "../../store/actions/Products";
import { AddToCart } from "../../store/actions/Cart";
import { useHistory } from "react-router-dom";

import Product from "../../component/Product/Product";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Btn from "../../component/Btn/Btn";
import Pagination from "../../component/Pagination/Pagination";
import Loader from "../../component/Loader/Loader";

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
    dispatch(ProductsRequest());
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
      dispatch(AddToCart(""));
    } else {
      product.qty = 1;
      product.total = product.price;
      // AddToCart(product);
      dispatch(AddToCart(product));
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
          {currentProducts.length
            ? currentProducts.map(
                ({ id, title, description, image, price }) => {
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
                }
              )
            : loading && <Loader />}
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

export default Products;
