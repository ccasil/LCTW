import isEmpty from "../validation/is-empty";

import {
  GET_USERS,
  GET_USER,
  USER_LOADING,
  USERS_LOADING
} from "../actions/types";

const initialState = {
  users: [],
  user: {},
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case USER_LOADING:
      return {
        ...state,
        loading: true
      };
    case USERS_LOADING:
      return {
        ...state,
        loading: true
      };
    case GET_USERS:
      return {
        ...state,
        users: action.payload,
        loading: false
      };
    case GET_USER:
      return {
        ...state,
        user: action.payload,
        loading: false
      };

    default:
      console.log("at REDUCER", action.payload);
      return state;
  }
}
