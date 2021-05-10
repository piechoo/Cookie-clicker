import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { getCookie, getUser } from "../redux/selectors";
import { postCookieState, postUserState } from "../utils/apiComunication";
import { getCookieStorage, getUserStorage, setCookieStorage, setUserStorage } from "../utils/storageUtils";

const StateWatcher = () => {
  const user = useSelector(getUser);
  const cookie = useSelector(getCookie);

  useEffect(() => {
    if (JSON.stringify(user) !== getUserStorage()) {
      setUserStorage(user);
      postUserState(user, "//localhost:5000");
    }
    if (JSON.stringify(cookie) !== getCookieStorage()) {
      setCookieStorage(cookie);
      postCookieState(cookie, "//localhost:5000");
    }
  }, [cookie, user]);

  return null;
};

export default StateWatcher;
