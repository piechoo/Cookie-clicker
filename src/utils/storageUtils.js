import { resetCookieState } from "../redux/reducers/cookie";
import { resetUserState } from "../redux/reducers/user";

export const resetUserStorage = () => {
  localStorage.setItem("user", JSON.stringify(resetUserState));
};
export const resetCookieStorage = () => {
  localStorage.setItem("cookie", JSON.stringify(resetCookieState));
};
export const setUserStorage = (user) => {
  localStorage.setItem("user", JSON.stringify(user));
};
export const setCookieStorage = (cookie) => {
  localStorage.setItem("cookie", JSON.stringify(cookie));
};

export const getCookieStorage = () => {
  return localStorage.getItem("cookie");
};

export const getUserStorage = () => {
  return localStorage.getItem("user");
};
