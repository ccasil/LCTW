import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import eventfulReducer from "./eventfulReducer";



export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
    eventful: eventfulReducer
});
