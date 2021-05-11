import axios from "axios";

//PATCH z zadania
export const patchCounterState = async (counter, host) => {
  const res = await axios.patch(`${host}/api/v1/progress`, { click_count: counter });
  return res;
};

//komunikacja z api w node
export const postCookieState = (cookie, host) => {
  axios.post(`${host}/cookie`, cookie);
};

export const postUserState = (user, host) => {
  axios.post(`${host}/user`, user);
};
