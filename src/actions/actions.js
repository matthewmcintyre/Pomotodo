import * as actionTypes from "./actionTypes";

//Pomo actions
export const setSession = newTime => ({
  type: actionTypes.SET_SESSION,
  newTime
});

export const setBreak = newTime => ({
  type: actionTypes.SET_BREAK,
  newTime
});

export const resetToDefault = () => ({
  type: actionTypes.RESET_TO_DEFAULT
});

export const tickSecond = second => ({
  type: actionTypes.TICK_SECOND,
  second
});

export const setIntervalId = id => ({
  type: actionTypes.SET_INTERVAL_ID,
  id
});

//Todo actions
export const addTodo = () => ({
  type: actionTypes.ADD_TODO
});

export const removeTodo = () => ({
  type: actionTypes.REMOVE_TODO
});

export const completeTodo = () => ({
  type: actionTypes.COMPLETE_TODO
});

export const undoCompleteTodo = () => ({
  type: actionTypes.UNDO_COMPLETE_TODO
});
