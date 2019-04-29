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

export const tickSecond = () => ({
  type: actionTypes.TICK_SECOND
});

export const setIntervalId = id => ({
  type: actionTypes.SET_INTERVAL_ID,
  id
});

export const setRemainingTime = sessionOrBreak => ({
  type: actionTypes.SET_REMAINING_TIME,
  sessionOrBreak
});

//Todo actions

let nextTodoId = 1;

export const addTodo = () => ({
  type: actionTypes.ADD_TODO,
  id: nextTodoId++
});

export const completeTodo = id => ({
  type: actionTypes.COMPLETE_TODO,
  id
});

export const updateTodo = (id, value) => ({
  type: actionTypes.UPDATE_TODO,
  id,
  value
});

//Todo settings actions
export const showActive = () => ({
  type: actionTypes.SHOW_ACTIVE
});

export const showCompleted = () => ({
  type: actionTypes.SHOW_COMPLETED
});
