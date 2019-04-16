import {
  INCREASE_TIMER,
  DECREASE_TIMER,
  INCREASE_BREAK,
  DECREASE_BREAK,
  RESET_TO_DEFAULT,
  TICK_SECOND,
  SET_INTERVAL_ID
} from "../actions/actionTypes";

const initialState = {
  //timer default of 25 mins
  //break default of 5 mins
  secondsRemaining: 25,
  timer: 25,
  break: 5,
  intervalId: 0
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
        timer: state.timer + 1,
        secondsRemaining: state.secondsRemaining + 1
      };

    case DECREASE_TIMER:
      return {
        ...state,
        timer: state.timer - 1,
        secondsRemaining: state.secondsRemaining - 1
      };

    case INCREASE_BREAK:
      return {
        ...state,
        break: state.break + 1
      };

    case DECREASE_BREAK:
      return {
        ...state,
        break: state.break - 1
      };
    case RESET_TO_DEFAULT:
      return {
        ...state,
        timer: 25,
        break: 5
      };

    case TICK_SECOND:
      let newTime = state.secondsRemaining - 1;

      return {
        ...state,
        secondsRemaining: newTime
      };

    case SET_INTERVAL_ID:
      return {
        ...state,
        intervalId: action.id
      };
    default:
      return state;
  }
};

export default pomoReducer;
