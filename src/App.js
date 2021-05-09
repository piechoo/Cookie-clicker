import React, { useEffect, useRef, useState } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAchievements, getClicks, getCookies, getMachines } from "./redux/selectors";

import Navbar from "./components/Navbar";
import Achievements from "./components/Achievements";
import Shop from "./components/Shop";
import Homepage from "./components/Homepage";
import Status from "./components/Status";

import "./styles.css";
import { addAchievement } from "./redux/actions";
import AchievementsWatcher from "./components/AchievementsWatcher";

const App = () => {
  return (
    <div className="main">
      <Navbar />
      <AchievementsWatcher />
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
