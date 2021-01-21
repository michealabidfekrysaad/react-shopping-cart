import * as types from "../types/Loader";

const INITIAL_STATE = false;

export const loader = (state = INITIAL_STATE, action) => {
    switch (action.type) {
    case types.SHOW_LOADER:
      return action.payload;
    case types.HIDE_LOADER:
      return action.payload;
    default:
      return state;
  }
};