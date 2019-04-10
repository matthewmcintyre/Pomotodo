import { combineReducers } from "redux";
import pomoReducer from "./pomoReducer";
import todoReducer from "./todoReducer";

export default combineReducers({ todoReducer, pomoReducer });
