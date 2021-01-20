import { axiosInstance } from "./Index";

export const getProducts = async (payload) => {
  return await axiosInstance.get(`/products`, { handlerEnabled: true });
};

 