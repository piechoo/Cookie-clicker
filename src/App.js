import React, { useEffect, useState } from "react";
import { Route, Switch, useHistory, withRouter, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import Achievements from "./components/Achievements";
import Shop from "./components/Shop";
import Homepage from "./components/Homepage";

import "./styles.css";

const App = () => {
  const [options, setOptions] = useState({ isLogged: false });
  return (
    <div className="main">
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route path="/achievements">
          <Achievements />
        </Route>
        <Route path="/shop">
          <Shop />
        </Route>
      </Switch>
    </div>
  );
};

export default withRouter(App);
