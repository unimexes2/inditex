// reducers.js
import { combineReducers } from 'redux';
import { SET_JSON_DATA, SET_LOAD_STATE } from './actions';

const initialDataState = {
  jsonData: null,
};

const dataReducer = (state = initialDataState, action) => {
  switch (action.type) {
    case SET_JSON_DATA:
      return { ...state, jsonData: action.payload };
    default:
      return state;
  }
};

const initialLoadState = false;

const loadReducer = (state = initialLoadState, action) => {
  switch (action.type) {
    case SET_LOAD_STATE:
      return action.payload;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  data: dataReducer,
  load: loadReducer,
});

export default rootReducer;
