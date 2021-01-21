import * as types from "../types/Loader";

export const loader = payload => {
  return payload
    ? {
        type: types.SHOW_LOADER,
        payload
      }
    : {
        type: types.HIDE_LOADER,
        payload
      };
};

