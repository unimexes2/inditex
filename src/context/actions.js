// actions.js
export const SET_JSON_DATA = 'SET_JSON_DATA';
export const SET_LOAD_STATE = 'SET_LOAD_STATE';

export const setJsonData = jsonData => ({
  type: SET_JSON_DATA,
  payload: jsonData,
});

export const setLoadState = loadState => ({
  type: SET_LOAD_STATE,
  payload: loadState,
});
