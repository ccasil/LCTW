import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import eventfulReducer from "./eventfulReducer";
import userReducer from "./userReducer";



export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
    eventful: eventfulReducer,
  user: userReducer
});
