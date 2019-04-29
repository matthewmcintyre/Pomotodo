import {
  SET_SESSION,
  SET_BREAK,
  RESET_TO_DEFAULT,
  TICK_SECOND,
  SET_INTERVAL_ID,
  SET_REMAINING_TIME
} from "../actions/actionTypes";

const initialState = {
  //timer default of 25 mins
  //break default of 5 mins
  secondsRemaining: 1500,
  mm: 25,
  ss: "00",
  session: 25,
  break: 5,
  intervalId: 0,
  inSession: true
};

const pomoReducer = (state = initialState, action) => {
  //reset everything to default
  //adjust timer
  //adjust break
  //custom time - do not accept any number below 1
  //custom break
  switch (action.type) {
    //TODO
    case SET_SESSION:
      //if in session and paused set seconds remaining and mm / ss values
      if (state.inSession === true && state.intervalId === 0) {
        return {
          ...state,
          session: action.newTime,
          secondsRemaining: action.newTime * 60,
          mm: action.newTime,
          ss: "00"
        };
      }
      //if in session and counting down set seconds remaining and session
      else if (state.inSession === true && state.intervalId !== 0) {
        return {
          ...state,
          session: action.newTime,
          secondsRemaining: action.newTime * 60,
          mm: action.newTime,
          ss: "00"
        };
      }
      //if not in break just set break
      else {
        return {
          ...state,
          session: action.newTime
        };
      }

    //TODO FIX ME
    case SET_BREAK:
      //if in break and paused set seconds remaining and mm / ss values
      if (state.inSession === false && state.intervalId === 0) {
        return {
          ...state,
          break: action.newTime,
          secondsRemaining: action.newTime * 60,
          mm: action.newTime,
          ss: "00"
        };
      }
      //if in break and counting down set seconds remaining and break
      else if (state.inSession === false && state.intervalId !== 0) {
        return {
          ...state,
          break: action.newTime,
          secondsRemaining: action.newTime * 60,
          mm: action.newTime,
          ss: "00"
        };
      }
      //if not in break just set break
      else {
        return {
          ...state,
          break: action.newTime
        };
      }

    case SET_REMAINING_TIME:
      if (action.sessionOrBreak === true) {
        return {
          ...state,
          secondsRemaining: state.session * 60,
          inSession: true
        };
      } else {
        return {
          ...state,
          secondsRemaining: state.break * 60,
          inSession: false
        };
      }

    case RESET_TO_DEFAULT:
      return {
        ...state,
        timer: 25,
        break: 5,
        intervalId: 0,
        secondsRemaining: 1500,
        inSession: true,
        mm: 25,
        ss: "00"
      };

    case TICK_SECOND:
      let minusSecond = state.secondsRemaining - 1;

      let m = Math.floor(minusSecond / 60);
      let s = Math.floor((minusSecond % 60) % 60);

      let mm = m < 10 ? "0" + m : m * 1;
      let ss = s < 10 ? "0" + s : s * 1;

      return {
        ...state,
        secondsRemaining: minusSecond,
        mm: mm,
        ss: ss
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
