import {
    ADD_EVENT,
    GET_POSTS,
    GET_POST,
    DELETE_POST,
    POST_LOADING
} from "../actions/types";

const initialState = {
    events: [],
    event: {},
    loading: false
};

export default function (state = initialState, action) {
    switch (action.type) {
      case POST_LOADING:
        return { ...state, loading: true };
      case GET_POSTS:
        return { ...state, posts: action.payload, loading: false };
      case GET_POST:
        return { ...state, post: action.payload, loading: false };

      case ADD_EVENT:
        return { ...state, events: [action.payload, ...state.events] };
      case DELETE_POST:
        return { ...state, posts: state.posts.filter(post => post._id !== action.payload) };
      default:
        return state;
    }
}
