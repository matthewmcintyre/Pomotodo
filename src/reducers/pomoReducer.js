import {
  INCREASE_TIMER,
  DECREASE_TIMER,
  INCREASE_BREAK,
  DECREASE_BREAK,
  RESET_TO_DEFAULT
} from "../actions/actionTypes";

const initialState = {
  //timer default of 25 mins
  //break default of 5 mins
  secondsRemaining: "",
  timer: "25",
  break: "5"
};

const pomoReducer = (state = initialState, action) => {
  //reset everything to default
  //adjust timer
  //adjust break
  //custom time - do not accept any number below 1
  //custom break
  switch (action.type) {
    case INCREASE_TIMER:
      return {
        ...state,
        todo: "test"
      };

    case DECREASE_TIMER:
      return {
        ...state,
        todo: "test"
      };

    case INCREASE_BREAK:
      return {
        ...state,
        todo: "test"
      };

    case DECREASE_BREAK:
      return {
        ...state,
        todo: "test"
      };
    case RESET_TO_DEFAULT:
      return {
        ...state,
        timer: "25",
        break: "5"
      };
    default:
      return state;
  }
};

export default pomoReducer;
