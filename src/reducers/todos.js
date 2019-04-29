import { ADD_TODO, COMPLETE_TODO, UPDATE_TODO } from "../actions/actionTypes";

// strongly influenced by the structure of Redux example
// https://redux.js.org/basics/example

const initialState = [
  {
    id: 0,
    content: "",
    defaultContent: "first priority here",
    completed: false
  }
];

const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: action.id,
          completed: false,
          content: ""
        }
      ];

    case UPDATE_TODO:
      return state.map(todo =>
        todo.id === parseInt(action.id)
          ? { ...todo, content: action.value }
          : todo
      );

    case COMPLETE_TODO:
      return state.map(todo =>
        todo.id === parseInt(action.id) ? { ...todo, completed: true } : todo
      );

    default:
      return state;
  }
};

export default todos;
