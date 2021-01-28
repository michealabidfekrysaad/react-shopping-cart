import React, { Suspense, lazy } from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import store from "../../store/Index";
import Navbar from "../../component/Navbar/Navbar";
import "./App.scss";
import Loader from "../../component/Loader/Loader";


const Products = lazy(() => import("../Products/Products"));
const Cart = lazy(() => import("../Cart/Cart"));
const ProductsDetails = lazy(() => import("../ProductDetails/ProductsDetails"));
const Order = lazy(() => import("../Order/Order"));


const AppComp = () => {
  return (
    <Provider store={store}>
      <div>
        <Router>
          <Suspense fallback={<Loader />}>
            <main className="container-fluid">
              <Navbar />
              <section>
                <Switch>
                  <Route path="/" exact component={Products} />
                  <Route path="/cart" component={Cart} />
                  <Route path="/product-details/:id" component={ProductsDetails} />
                  <Route path="/order" component={Order} />
                </Switch>
              </section>
            </main>
          </Suspense>
        </Router>
      </div>
    </Provider>
  );
};

export default AppComp;
