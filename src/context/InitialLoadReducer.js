import { SET_JSON_DATA } from './jsonData';
import { SET_LOAD_STATE } from './loadState';

const initialState = {
  jsonData: null,
  loadState: true,
};

const InitialLoadReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOAD_STATE:
      return {
        ...state,
        loadState: action.payload,
      };

    case SET_JSON_DATA:
      return {
        ...state,
        jsonData: action.payload,
      };

    default:
      return state;
  }
};

export default InitialLoadReducer;
