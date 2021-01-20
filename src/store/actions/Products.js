import * as types from "../types/Products";

export const ProductsRequest = (payload) => ({
    type: types.GET_PRODUCTS_REQUEST,
    payload
})

export const ProductsReceive = (payload) => ({
    type: types.GET_PRODUCTS_RECEIVE,
    payload
})

