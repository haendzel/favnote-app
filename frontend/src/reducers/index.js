import {
  ADD_ITEM,
  ADD_ITEM_SUCCESS,
  REMOVE_ITEM_REQUEST,
  REMOVE_ITEM_SUCCESS,
  AUTH_REQUEST,
  AUTH_FAILURE,
  AUTH_SUCCESS,
} from 'actions';
import { FETCH_SUCCESS } from '../actions';

const initialState = {
  userID: '62a0a2ce1c9325b80f9a8766',
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SUCCESS:
      return {
        ...state,
        [action.payload.itemType]: [...action.payload.data],
      };
    case AUTH_FAILURE:
      return {
        ...state,
        message: action.err.message,
      };
    case AUTH_SUCCESS:
      return {
        ...state,
        userID: action.payload.data._id,
      };
    case ADD_ITEM_SUCCESS:
      return {
        ...state,
        [action.payload.itemType]: [...state[action.payload.itemType], action.payload.data],
      };
    case REMOVE_ITEM_SUCCESS:
      return {
        ...state,
        [action.payload.itemType]: [
          ...state[action.payload.itemType].filter(item => item._id !== action.payload._id),
        ],
      };
    default:
      return state;
  }
};

export default rootReducer;
