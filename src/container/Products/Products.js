import React, { useEffect } from "react";
import {
  ProductsRequest,
  ProductsDetailsRequest,
} from "../../store/actions/Products";
import { addToCartA } from "../../store/actions/Cart";
import loader from "../../../src/loader.svg";
import { useHistory } from "react-router-dom";

import Product from "../../component/Product/Product";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Btn from "../../component/Btn/Btn";

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
  const classes = useStyles();
  const history = useHistory();

  const { ProductsRequest, addToCartA, ProductsDetailsRequest } = props;
  useEffect(() => {
    ProductsRequest();
  }, [ProductsRequest]);

  const addToCart = (product) => {
    addToCartA(product);
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
          {props.products.length ? (
            props.products.map(({ id, title, description, image, price }) => {
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
                        addToCart,
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
          ) : props.loading ? (
            <div className="loader">
              <img src={loader} alt="My logo" />
            </div>
          ) : null}
        </Grid>
      </Grid>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.ProductsReducer,
    loading: state.loader,
  };
};

export default connect(mapStateToProps, {
  ProductsRequest,
  addToCartA,
  ProductsDetailsRequest,
})(Products);
