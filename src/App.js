import React, { useState, useCallback } from "react";
import {
  Redirect,
  Route,
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";

import NewProduct from "./Products/pages/NewProduct";
import UserCart from "./Users/Pages/UserCart";
import MainNavigation from "./shared/components/Navigation/MainNavigation";
import HomePage from "./shared/pages/HomePage";
import Product from "./Products/pages/Product";
import UpadateProduct from "./Products/pages/UpadateProduct";
import Auth from "./Users/Pages/Auth";
import { AuthContext } from "./shared/components/Context/auth-context";
import anyth from './Users/Pages/anyth'

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = useCallback(() => {
    setIsLoggedIn(true);
  }, []);

  const logout = useCallback(() => {
    setIsLoggedIn(false);
  }, []);

  let routes;
  if (isLoggedIn) {
    routes = (
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
      </Switch>
    );
  } else {
    routes = (
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/products/:pid">
          <Product />
        </Route>
        <Route path="/user/auth">
          <Auth />
        </Route>
      </Switch>
    );
  }

  return (
    <AuthContext.Provider
      value={{ isLoggedIn: isLoggedIn, login: login, logout: logout }}
    >
      <Router>
        <MainNavigation />
        <main className="mt-14">
          <Switch>
            <Route path="/" exact>
              <HomePage />
            </Route>
            <Route path="/Add-Product">
              <NewProduct />
            </Route>
            <Route path="/products/updateproduct/:pid">
              <UpadateProduct />
            </Route>
            <Route path="/products/:pid">
              <Product />
            </Route>
            <Route path="/user/cart">
              <UserCart />
            </Route>
            <Route path="/user/auth">
              <Auth />
            </Route>
            <Redirect to="/"></Redirect>
          </Switch>
        </main>
      </Router>
    </AuthContext.Provider>
  );
};

export default App;
