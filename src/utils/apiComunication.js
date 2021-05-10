import axios from "axios";

//PATCH z zadania
export const patchCounter = async (counter, host) => {
  const res = await axios.patch(`${host}/api/v1/progress`, { click_count: counter });
  return res;
};

//komunikacja z api w node
export const postCookieState = async (cookie, host) => {
  const res = await axios.post(`${host}/cookie`, cookie);
  return res;
};

export const postUserState = async (user, host) => {
  const res = await axios.post(`${host}/user`, user);
  return res;
};
