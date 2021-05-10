import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { buyMachine } from "../../redux/actions";
import { getCookies, getLevel, getMachines } from "../../redux/selectors";
import { cost, requirement } from "../../utils/cookieUtils";

const ShopItem = (props) => {
  const dispatch = useDispatch();
  const cookie = useSelector(getCookies);
  const level = useSelector(getLevel);
  const buy = useCallback(() => dispatch(buyMachine(props.name)), [dispatch]);
  return (
    <div className="machine">
      <img className="machine__img" src={props.src} />
      <span>
        {props.description}
        <br />
        Koszt: <b>{cost(props.name, useSelector(getMachines)[props.name])}</b> ciastek
        <br />
        Wymagania: <b>{requirement(props.name)}</b> poziom
      </span>
      <button
        className="btn btn-warning mt-2"
        onClick={buy}
        disabled={
          cookie - cost(props.name, useSelector(getMachines)[props.name]) >= 0 && requirement(props.name) <= level
            ? false
            : true
        }
      >
        KUP
      </button>
    </div>
  );
};
export default ShopItem;
