import React, { useCallback } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { RESET_COOKIE } from "../redux/actionTypes";

const Navbar = () => {
  const dispatch = useDispatch();
  const reset = useCallback(() => dispatch({ type: RESET_COOKIE }), [dispatch]);
  return (
    <div className="main">
      <nav className="navbar navbar-dark bg-warning">
        <div className="container-fluid">
          <div className="navbar-header">
            <NavLink to="/" className="navbar-brand">
              <b>Strona Główna</b>
            </NavLink>
          </div>

          <ul className="nav navbar-nav navbar-right">
            <li>
              <button onClick={reset} className="navbar-brand button-nobackground">
                <b>Wyzeruj licznik</b>
              </button>
            </li>
            <li>
              <NavLink to="/shop" className="navbar-brand">
                <b>Sklep</b>
              </NavLink>
            </li>
            <li>
              <NavLink to="/achievements" className="navbar-brand">
                <b>Osiągnięcia</b>
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
