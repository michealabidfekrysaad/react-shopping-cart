import { axiosInstance } from "./Index";

export const getProducts = async () => {
  return await axiosInstance.get(`/products`, { handlerEnabled: true });
};

export const getProductDetails = async (params) => {
  return await axiosInstance.get(`/products/${params}`, { handlerEnabled: true });
};

 