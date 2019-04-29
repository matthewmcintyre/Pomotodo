import { combineReducers } from "redux";
import pomoReducer from "./pomoReducer";
import todos from "./todos";
import todoSettings from "./todoSettings";

export default combineReducers({ todos, pomoReducer, todoSettings });
