import React from "react";
import Navbar from "../../component/Navbar/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Products from "../../component/Products/Products";
import Cart from "../../component/Cart/Cart";
import ProductsDetails from "../../component/ProductDetails/ProductsDetails";
import Order from "../../component/Order/Order";
import "./App.scss"

const AppComp = () => {
  return (
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
  );
};

export default AppComp;

// function App() {
//   return (
//     <Router>
//     <div className="App">
//       <Nav />
//       <Switch>
//       <Route path="/" exact component={FormikContainer}/>
//       <Route path="/about" component={About}/>
//       <Route path="/shop" component={Shop}/>
//       <Route path="/login" component={LoginForm}/>
//       <Route path="/register" component={PersonList}/>
//       </Switch>
//     </div>
//     </Router>
//   );
// }
