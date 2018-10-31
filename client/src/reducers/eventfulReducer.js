import {
  ADD_EVENTFUL,
  GET_EVENTFULS,
  GET_EVENTFUL,
  DELETE_EVENTFUL,
  EVENTFUL_LOADING
} from "../actions/types";

const initialState = {
    eventfuls: [],
    eventful: {},
    loading: false
};

export default function (state = initialState, action) {
    switch (action.type) {
      case EVENTFUL_LOADING:
        return { ...state, loading: true };
      case GET_EVENTFULS:
        return { ...state, eventfuls: action.payload, loading: false };
      case GET_EVENTFUL:
        return { ...state, eventful: action.payload, loading: false };
      case ADD_EVENTFUL:
        return { ...state, eventfuls: [action.payload, ...state.eventfuls] };
      case DELETE_EVENTFUL:
        return { ...state, eventfuls: state.eventfuls.filter(eventful => eventful._id !== action.payload) };
      default:
        return state;
    }
}
