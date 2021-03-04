import React, { Component } from "react";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import Routes from "./components/common/Routes";
import CartContextProvider from "./contexts/CartContext";

const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <CartContextProvider>
        <Routes />
      </CartContextProvider>
    </Router>
  );
}

export default App;
