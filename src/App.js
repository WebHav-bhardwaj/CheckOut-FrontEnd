import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

import MainNavigation from "./shared/components/Navigation/MainNavigation";
import HomePage from "./shared/pages/HomePage";
import NewProduct from "./Products/pages/NewProduct";
import UserCart from "./Users/Pages/UserCart";

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
          <Redirect to="/"></Redirect>
        </Switch>
      </main>
    </Router>
  );
};

export default App;
