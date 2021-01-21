import { axiosInstance } from "./Index";

export const getProducts = async () => {
  return await axiosInstance.get(`/products`, { handlerEnabled: true });
};

 