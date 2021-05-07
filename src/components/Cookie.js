import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import { ADD_COOKIE } from "../redux/actionTypes";
const Cookie = () => {
  const dispatch = useDispatch();
  const incrementCounter = useCallback(() => dispatch({ type: ADD_COOKIE }), [dispatch]);
  return (
    <button className="cookie" onClick={incrementCounter}>
      <img src={"./cookie.png"} />
    </button>
  );
};
export default Cookie;
