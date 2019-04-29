import { SHOW_ACTIVE, SHOW_COMPLETED } from "../actions/actionTypes";

const initialState = {
  isActive: true
};

const todoSettings = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_ACTIVE:
      return {
        ...state,
        isActive: true
      };

    case SHOW_COMPLETED:
      return {
        ...state,
        isActive: false
      };
    default:
      return state;
  }
};

export default todoSettings;
