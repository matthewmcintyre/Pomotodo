import {
  ADD_TODO,
  REMOVE_TODO,
  COMPLETE_TODO,
  UNDO_COMPLETE_TODO
} from "../actions/actionTypes";

const initialState = {
  todo: "hi"
  //example todo?
  //total todo's?
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todo: "test"
      };

    case REMOVE_TODO:
      return {
        ...state,
        todo: "test"
      };

    case COMPLETE_TODO:
      return {
        ...state,
        todo: "test"
      };

    case UNDO_COMPLETE_TODO:
      return {
        ...state,
        todo: "test"
      };
    default:
      return state;
  }
};

export default todoReducer;
