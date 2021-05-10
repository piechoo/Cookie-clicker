import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Achievements from "./components/Achievements/Achievements";
import Shop from "./components/Shop/Shop";
import Homepage from "./components/Homepage";
import Status from "./components/Status/Status";

import "./app.css";
import AchievementsWatcher from "./components/Achievements/AchievementsWatcher";
import StateWatcher from "./components/StateWatcher";

const App = () => {
  return (
    <div className="main">
      <Navbar />
      <AchievementsWatcher />
      <StateWatcher />
      <div className="content">
        <Switch>
          <Route exact path={["/", "/home"]}>
            <Homepage />
          </Route>
          <Route path="/achievements">
            <Achievements />
          </Route>
          <Route path="/shop">
            <Shop />
          </Route>
        </Switch>
        <Status />
      </div>
    </div>
  );
};

export default withRouter(App);
