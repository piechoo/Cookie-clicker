import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BUY_MACHINE } from "../redux/actionTypes";
import { getCookies } from "../redux/selectors";

const cost = (name) => {
  switch (name) {
    case "cursor":
      return 10;
    case "grandma":
      return 100;
    case "mine":
      return 1000;
    case "factory":
      return 10000;
    default:
      return 0;
  }
};

const ShopItem = (props) => {
  const dispatch = useDispatch();
  const cookie = useSelector(getCookies);
  const buy = useCallback(() => dispatch({ type: BUY_MACHINE, payload: { name: props.name } }), [dispatch]);
  return (
    <div className="machine">
      <img className="machine__img" src={props.src} />
      <span>
        {props.description}
        <p>Kosztuje {cost(props.name)}</p>
      </span>
      <button onClick={buy} disabled={cookie - cost(props.name) >= 0 ? false : true}>
        KUP
      </button>
    </div>
  );
};
export default ShopItem;
