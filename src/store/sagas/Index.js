import { all } from "redux-saga/effects";

import { getProductsSaga } from "./Products";

export function* watchSagas() {
  yield all([getProductsSaga()]);
}
