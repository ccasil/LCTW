import axios from "axios";
import setAuthToken from "../utils/setAuthToken";
import jwt_decode from "jwt-decode";

import {
  GET_ERRORS,
  SET_CURRENT_USER,
  GET_USERS,
  USER_LOADING,
  USERS_LOADING,
  GET_USER,
  DELETE_USER,
} from "./types";



// Register User
export const registerUser = (userData, history) => dispatch => {
    console.log("at auth action", userData, history)
  axios
    .post("/api/users/register", userData)
    .then(res => history.push("/login"))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Login - Get User Token
export const loginUser = userData => dispatch => {
  axios
    .post("/api/users/login", userData)
    .then(res => {
  
      // Save to localStorage
      const { token } = res.data;
      // Set token to ls
      localStorage.setItem("jwtToken", token);
      // Set token to Auth header
      setAuthToken(token);
      // Decode token to get user data
      const decoded = jwt_decode(token);
      // Set current user
      dispatch(setCurrentUser(decoded));
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Delete account & profile
export const deleteAccount = () => dispatch => {
    if (window.confirm('Are you sure? This can NOT be undone!')) {
        axios
            .delete('/api/users')
             .then(res =>{
              console.log(res),
                dispatch({
                    type: SET_CURRENT_USER,
                    payload: {}
                })}
            ).catch(err =>
                dispatch({
                    type: GET_ERRORS,
                    payload: err.response.data
                })
            )
    }


}
// Get Users
export const getUsers = () => dispatch => {
  dispatch(setUserLoading());
  axios
    .get("/api/users")

    .then(res =>{dispatch({ type: GET_USERS, payload: res.data })})

    .catch(err => dispatch({ type: GET_USERS, payload: null }));
};

// Get User
export const getUser = id => dispatch => {

  dispatch(setUserLoading());

  axios
    .get(`/api/users/${id}`)
    .then(res => dispatch({ type: GET_USER, payload: res.data }))
    .catch(err => dispatch({ type: GET_USER, payload: null }));
};


// update user
export const updateUser = id => dispatch => {
  axios
    .post(`/api/users/${id}`)
    .then(res => dispatch(getUsers()))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

export const setUserLoading = () => {
  return { type: USER_LOADING };
};


// Set logged in user
export const setCurrentUser = decoded => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded
  };
};

// Log user out
export const logoutUser = () => dispatch => {
  // Remove token from localStorage
  localStorage.removeItem("jwtToken");
  // Remove auth header for future requests
  setAuthToken(false);
  // Set current user to {} which will set isAuthenticated to false
  dispatch(setCurrentUser({}));
};
