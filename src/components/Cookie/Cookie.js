import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCookies, updateClicks } from "../../redux/actions";
import { getClicks } from "../../redux/selectors";
import { patchCounterState } from "../../utils/apiComunicationUtils";

import "./cookie.css";

const Cookie = () => {
  const dispatch = useDispatch();
  const [clicks, setClicks] = useState(0);
  const clicksPerSecond = useSelector(getClicks);

  useEffect(() => {
    const timer = setInterval(() => {
      setClicks(0);
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);
  useEffect(() => {
    if (clicks > clicksPerSecond) dispatch(updateClicks(clicks));
  }, [clicksPerSecond, clicks]);

  const incrementCounter = () => {
    dispatch(addCookies(1));
    const actClicks = clicks;
    setClicks(actClicks + 1);
    //Patch z zadania
    //patchCounterState("//localhost", actClicks + 1);
  };
  return <img src={"./cookie.png"} className="cookie mt-3" onClick={incrementCounter} />;
};
export default Cookie;
