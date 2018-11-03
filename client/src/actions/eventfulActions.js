import axios from 'axios';

import {
  ADD_EVENTFUL,
  GET_ERRORS,
  ADD_LIKE,
  REMOVE_LIKE,
  GET_EVENTFUL,
  GET_EVENTFULS,
  DELETE_EVENTFUL,
  CLEAR_ERRORS,
  EVENTFUL_LOADING
} from "./types";

// Add eventful
export const addEventful = eventfulData => dispatch => {
    dispatch(clearErrors());
    axios
      .post("/api/eventfuls", eventfulData)
      .then(res => dispatch({ type: ADD_EVENTFUL, payload: res.data }))
      .catch(err =>
        dispatch({
          type: GET_ERRORS,
          payload: err.response.data
        })
      );
};

// Get Eventfuls
export const getEventfuls = () => dispatch => {
    dispatch(setEventfulLoading());
  
    axios
      .get("/api/eventfuls")

      .then(res =>  dispatch({ type: GET_EVENTFULS, payload: res.data }))

        .catch(err =>  dispatch({ type: GET_EVENTFULS, payload: null }));
};

// Get Eventful
export const getEventful = id => dispatch => {

    dispatch(setEventfulLoading());
    
    axios
      .get(`/api/eventfuls/${id}`)
      .then(res => dispatch({ type: GET_EVENTFUL, payload: res.data }))
        .catch(err => dispatch({ type: GET_EVENTFUL, payload: null }));
};

// Delete EVENTful
export const deleteEventful = id => dispatch => {
    axios
      .delete(`/api/eventfuls/${id}`)
      .then(res => dispatch({ type: DELETE_EVENTFUL, payload: id }))
      .catch(err =>
        dispatch({
          type: GET_ERRORS,
          payload: err.response.data
        })
      );
};

// Add Like
export const addLike = id => dispatch => {
    axios
        .post(`/api/eventfuls/like/${id}`)
        .then(res => dispatch(getEventfuls()))
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        );
};

// Remove Like
export const removeLike = id => dispatch => {
    axios
        .post(`/api/eventfuls/unlike/${id}`)
        .then(res => dispatch(getEventfuls()))
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        );
};

// Add Comment
export const addComment = (eventfulId, commentData) => dispatch => {
    dispatch(clearErrors());
    axios
      .post(`/api/eventfuls/comment/${eventfulId}`, commentData)
      .then(res => dispatch({ type: GET_EVENTFUL, payload: res.data }))
      .catch(err =>
        dispatch({
          type: GET_ERRORS,
          payload: err.response.data
        })
      );
};

// Delete Comment
export const deleteComment = (eventfulId, commentId) => dispatch => {
    axios
      .delete(`/api/eventfuls/comment/${eventfulId}/${commentId}`)
      .then(res => dispatch({ type: GET_EVENTFUL, payload: res.data }))
      .catch(err =>
        dispatch({
          type: GET_ERRORS,
          payload: err.response.data
        })
      );
};

// Set loading state
export const setEventfulLoading = () => {
    return { type: EVENTFUL_LOADING };
};

// Clear errors
export const clearErrors = () => {
    return {
        type: CLEAR_ERRORS
    };
};
