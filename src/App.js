import React from "react";
import {
  Redirect,
  Route,
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";

import NewProduct from "./Products/pages/NewProduct";
import Auth from "./Users/Pages/Auth";
import UserCart from "./Users/Pages/UserCart";
import MainNavigation from "./shared/components/Navigation/MainNavigation";
import HomePage from "./shared/pages/HomePage";

const App = () => {
  return (
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
          <Route path="/user/cart">
            <UserCart />
          </Route>
          <Route path="/user/auth">
            
          </Route>
          <Redirect to="/"></Redirect>
        </Switch>
      </main>
    </Router>
  );
};

export default App;
