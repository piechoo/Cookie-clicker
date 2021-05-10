import React, { useCallback, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getClicks, getCookies, getLevel, getMachines } from "../../redux/selectors";
import { resetCookie, resetUser, addCookies, updateLevel } from "../../redux/actions";
import "./status.css";

const Status = () => {
  const cookie = useSelector(getCookies);
  const machines = useSelector(getMachines);
  const level = useSelector(getLevel);
  const clicksPerSecond = useSelector(getClicks);

  const cursor = machines["cursor"];
  const grandma = machines["grandma"];
  const mine = machines["mine"];
  const factory = machines["factory"];

  const dispatch = useDispatch();
  const reset = useCallback(() => {
    dispatch(resetCookie());
    dispatch(resetUser());
  }, [dispatch]);

  const countLevel = () => {
    if (cookie < 10) return 1;
    else return Math.ceil(Math.log2((cookie + 1) / 10) + 1);
  };

  const increaseMachineCookies = (amount) => {
    dispatch(addCookies(amount));
  };

  useEffect(() => {
    if (cursor > 0) {
      const timer = setInterval(() => {
        increaseMachineCookies(cursor);
      }, 10000);
      return () => {
        clearInterval(timer);
      };
    }
  }, [cursor]);

  useEffect(() => {
    if (grandma > 0) {
      const timer = setInterval(() => {
        increaseMachineCookies(grandma);
      }, 1000);
      return () => {
        clearInterval(timer);
      };
    }
  }, [grandma]);

  useEffect(() => {
    if (mine > 0) {
      const timer = setInterval(() => {
        increaseMachineCookies(mine);
      }, 100);
      return () => {
        clearInterval(timer);
      };
    }
  }, [mine]);

  useEffect(() => {
    if (factory > 0) {
      const timer = setInterval(() => {
        increaseMachineCookies(factory);
      }, 10);
      return () => {
        clearInterval(timer);
      };
    }
  }, [factory]);

  useEffect(() => {
    if (countLevel() > level) dispatch(updateLevel(countLevel()));
  }, [cookie]);

  return (
    <div className="status">
      <h2 className="text-center">
        Ciastka: <p className="cookie-counter text-warning text-center">{cookie}</p>
      </h2>
      <h4>
        Poziom: <span className=" text-warning number">{level}</span>
      </h4>
      <h4>
        Max CPS: <span className=" text-warning number">{clicksPerSecond}</span>
      </h4>
      <h4>
        Kursory: <span className=" text-warning number">{cursor}</span>
      </h4>
      <h4>
        Babcie: <span className=" text-warning number">{grandma}</span>
      </h4>
      <h4>
        Kopalnie: <span className=" text-warning number">{mine}</span>
      </h4>
      <h4>
        Fabryki: <span className=" text-warning number">{factory}</span>
      </h4>
      <button onClick={reset} className="btn btn-outline-warning btn-block mt-3">
        <b>Wyzeruj postępy</b>
      </button>
    </div>
  );
};
export default Status;
