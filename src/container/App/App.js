import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import store from "../../store/Index";
import Navbar from "../../component/Navbar/Navbar";
import Products from "../Products/Products";
import Cart from "../Cart/Cart";
import ProductsDetails from "../ProductDetails/ProductsDetails";
import Order from "../Order/Order";
import "./App.scss"

const AppComp = () => {
  return (
    <Provider store={store}>
      <div>
        <Router>
          <main className="container-fluid">
            <Navbar />
            <section>
              <Switch>
                <Route path="/" exact component={Products} />
                <Route path="/cart" component={Cart} />
                <Route path="/product-details" component={ProductsDetails} />
                <Route path="/order" component={Order} />
              </Switch>
            </section>
          </main>
        </Router>
      </div>
    </Provider>
  );
};

export default AppComp;

