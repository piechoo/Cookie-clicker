import {
  ADD_COOKIE,
  ADD_COOKIES,
  BUY_CURSOR,
  BUY_FACTORY,
  BUY_GRANDMA,
  BUY_MINE,
  BUY_MACHINE,
  RESET_COOKIE,
} from "../actionTypes";

const initialState = {
  cookies: 0,
  machines: {
    cursor: 0,
    grandma: 0,
    mine: 0,
    factory: 0,
  },
};

const cost = (name) => {
  switch (name) {
    case "cursor":
      return 10;
    case "grandma":
      return 100;
    case "mine":
      return 1000;
    case "factory":
      return 10000;
    default:
      return 0;
  }
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_COOKIE: {
      return {
        ...state,
        cookies: state.cookies + 1,
      };
    }
    case ADD_COOKIES: {
      const { number } = action.payload;
      return {
        ...state,
        cookies: cookies + number,
      };
    }
    case BUY_MACHINE: {
      const { name } = action.payload;
      return {
        ...state,
        cookies: state.cookies - cost(name),
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
