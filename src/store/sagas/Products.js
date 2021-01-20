import { call, put, takeLatest } from "redux-saga/effects";
import * as API from "../../network/Apis";
import * as types from "../types/Products";
import * as ACTIONS from "../actions/Products";

// call 3ashan  a3mel call lel  api
//  put 3ashan a7ot el response gowa el store

export function* getProductsRequest({ payload }) {
  try {
    const response = yield call(API.getProducts, payload);
    yield put(ACTIONS.ProductsReceive(response.data));
  } catch (err) {
    console.log(err.config.headers["failed"]);
  }
}

export function* getProductsSaga() {
  yield takeLatest(types.GET_PRODUCTS_REQUEST, getProductsRequest);
}
