import * as actionTypes from "./actionTypes";

//Pomo actions
export const increaseTimer = () => ({
  type: actionTypes.INCREASE_TIMER
});

export const decreaseTimer = () => ({
  type: actionTypes.DECREASE_TIMER
});

export const increaseBreak = () => ({
  type: actionTypes.INCREASE_BREAK
});

export const decreaseBreak = () => ({
  type: actionTypes.DECREASE_BREAK
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
