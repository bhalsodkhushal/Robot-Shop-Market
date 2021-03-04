import React, { Component } from "react";
import { Switch } from "react-router-dom";
import OpenRoute from "./OpenRoute";

/* Product List & Cart Route Components */
import ProductList from "../productList";
import Cart from "../cart";

/* Other Common Route Components */
import Notfound from "../common/Notfound";

export default class Routes extends Component {
  render() {
    return (
      <Switch>
        <OpenRoute exact path="/" component={ProductList} />
        <OpenRoute exact path="/shopping-cart" component={Cart} />
        <OpenRoute path="*" component={Notfound} />
      </Switch>
    );
  }
}
