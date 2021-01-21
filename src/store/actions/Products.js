import * as types from "../types/Products";

export const ProductsRequest = () => ({
    type: types.GET_PRODUCTS_REQUEST
})

export const ProductsReceive = (payload) => ({
    type: types.GET_PRODUCTS_RECEIVE,
    payload
})

// productDetails

export const ProductsDetailsRequest = (payload) => ({
    type: types.GET_PRODUCTS_DETAILS_REQUEST,
    payload
})

export const ProductsDetailsReceive = (payload) => ({
    type: types.GET_PRODUCTS_DETAILS_RECEIVE,
    payload
})

