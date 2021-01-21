import * as types from "../types/Products";

export const ProductsRequest = () => ({
    type: types.GET_PRODUCTS_REQUEST
})

export const ProductsReceive = (payload) => ({
    type: types.GET_PRODUCTS_RECEIVE,
    payload
})

