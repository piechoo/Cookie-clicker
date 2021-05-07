import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCookies, getMachines } from "../redux/selectors";
import { RESET_COOKIE } from "../redux/actionTypes";
const Status = () => {
  const cookie = useSelector(getCookies);
  const machines = useSelector(getMachines);

  const countLevel = () => {
    if (cookie < 10) return 1;
    else return Math.ceil(Math.log2((cookie + 1) / 10) + 1);
  };
  const dispatch = useDispatch();
  const reset = useCallback(() => dispatch({ type: RESET_COOKIE }), [dispatch]);

  return (
    <div className="status">
      <h1 className=" ">
        <p>
          Masz <span className=" text-warning">{cookie}</span> ciastek!
        </p>
        <p>
          Kursory: <span className=" text-warning">{machines["cursor"]}</span>
        </p>
        <p>
          Babcie: <span className=" text-warning">{machines["grandma"]}</span>
        </p>
        <p>
          Kopalnie: <span className=" text-warning">{machines["mine"]}</span>
        </p>
        <p>
          Fabryki: <span className=" text-warning">{machines["factory"]}</span>
        </p>
        <p>
          Aktualny poziom: <span className=" text-warning">{countLevel()}</span>
        </p>
      </h1>
      <button onClick={reset} className="text-center">
        <b>Wyzeruj postępy</b>
      </button>
    </div>
  );
};
export default Status;
