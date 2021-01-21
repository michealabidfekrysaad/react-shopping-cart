import { call, put, takeLatest } from "redux-saga/effects";
import * as API from "../../network/Apis";
import * as types from "../types/Products";
import * as ACTIONS from "../actions/Products";


export function* getProductsRequest() {
  try {
    const response = yield call(API.getProducts);
    yield put(ACTIONS.ProductsReceive(response.data));
  } catch (err) {
    console.log(err.config.headers["failed"]);
  }
}

//for product details
export function* getProductsDetailsRequest(payload) {
  try {
    const response = yield call(API.getProductDetails,payload.payload);
    yield put(ACTIONS.ProductsReceive(response.data));
  } catch (err) {
    console.log(err.config.headers["failed"]);
  }
}

export function* getProductsSaga() {
  yield takeLatest(types.GET_PRODUCTS_REQUEST, getProductsRequest);
  yield takeLatest(types.GET_PRODUCTS_DETAILS_REQUEST, getProductsDetailsRequest);
}
