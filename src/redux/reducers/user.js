import { UPDATE_LEVEL, ADD_ACHIEVEMENT, RESET_USER, UPDATE_CLICKS } from "../actionTypes";

const initialState = {
  level: 1,
  achievements: {
    firstHundred: false,
    grandmaHolik: false,
    firstMilion: false,
    fastClicker: false,
  },
  clicksPerSecond: 0,
};

export default function (state = initialState, action) {
  switch (action.type) {
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
      return initialState;
    }
    default:
      return state;
  }
}
