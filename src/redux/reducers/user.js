import { UPDATE_LEVEL, ADD_ACHIEVEMENT, RESET_USER, UPDATE_CLICKS, SET_USER } from "../actionTypes";

export const resetUserState = {
  level: 1,
  achievements: {
    firstHundred: false,
    grandmaHolik: false,
    firstMilion: false,
    fastClicker: false,
  },
  clicksPerSecond: 0,
};

const initialState = JSON.parse(localStorage.getItem("user"))
  ? JSON.parse(localStorage.getItem("user"))
  : resetUserState;

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_USER: {
      const userState = action.payload;
      return userState;
    }
    case UPDATE_LEVEL: {
      const number = action.payload;
      return {
        ...state,
        level: number,
      };
    }
    case UPDATE_CLICKS: {
      const number = action.payload;
      return {
        ...state,
        clicksPerSecond: number,
      };
    }
    case ADD_ACHIEVEMENT: {
      const name = action.payload;
      return {
        ...state,
        achievements: {
          ...state.achievements,
          [name]: true,
        },
      };
    }
    case RESET_USER: {
      return resetUserState;
    }
    default:
      return state;
  }
}
