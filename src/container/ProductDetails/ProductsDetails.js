import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import "./ProductDetails.scss";
import { connect } from "react-redux";
import { ProductsDetailsRequest } from "../../store/actions/Products";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: "56.25%",
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

const ProductsDetails = ({
  product,
  history,
  ProductsDetailsRequest,
  loading,
}) => {
  let productH = +history.location.state;
  const classes = useStyles();
  useEffect(() => {
    ProductsDetailsRequest(productH);
  }, [ProductsDetailsRequest]);

  return (
    <div className="container-fluid">
      <div className="product-details">
        {!product.length ? (
          <Card className={classes.root}>
            <CardHeader
              avatar={
                <Avatar aria-label="recipe" className={classes.avatar}>
                  R
                </Avatar>
              }
              title={product.title}
              subheader="September 14, 2016"
            />
            <CardMedia
              className={classes.media}
              image={product.image ? product.image : null}
              title={product.title}
            />
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                {product.description}
              </Typography>
            </CardContent>
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                price is: {product.price}
              </Typography>
            </CardContent>
          </Card>
        ) : null}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    product: state.ProductsReducer,
    // loading: state.loader,
  };
};

export default connect(mapStateToProps, { ProductsDetailsRequest })(
  ProductsDetails
);
