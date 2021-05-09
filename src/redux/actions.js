import {
  UPDATE_LEVEL,
  ADD_ACHIEVEMENT,
  RESET_USER,
  ADD_COOKIES,
  BUY_MACHINE,
  RESET_COOKIE,
  UPDATE_CLICKS,
} from "./actionTypes";

export const updateLevel = (number) => {
  return { type: UPDATE_LEVEL, payload: number };
};
export const updateClicks = (number) => {
  return { type: UPDATE_CLICKS, payload: number };
};

export const addAchievement = (name) => {
  return { type: ADD_ACHIEVEMENT, payload: name };
};

export const resetUser = () => {
  return { type: RESET_USER };
};

export const addCookies = (number) => {
  return { type: ADD_COOKIES, payload: number };
};

export const buyMachine = (name) => {
  return { type: BUY_MACHINE, payload: name };
};

export const resetCookie = () => {
  return { type: RESET_COOKIE };
};
