import { ADD_COOKIES, BUY_MACHINE, RESET_COOKIE } from "../actionTypes";
import { cost } from "../../utils/cookieUtils";

const initialState = {
  cookies: 0,
  machines: {
    cursor: 0,
    grandma: 0,
    mine: 0,
    factory: 0,
  },
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_COOKIES: {
      const number = action.payload;
      return {
        ...state,
        cookies: state.cookies + number,
      };
    }
    case BUY_MACHINE: {
      const name = action.payload;
      return {
        ...state,
        cookies: state.cookies - cost(name, state.machines[name]),
        machines: {
          ...state.machines,
          [name]: state.machines[name] + 1,
        },
      };
    }
    case RESET_COOKIE: {
      return initialState;
    }
    default:
      return state;
  }
}
