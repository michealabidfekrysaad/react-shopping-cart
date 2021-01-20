import axios from "axios";
import { requestHandler, successHandler, errorHandler } from "./Interceptors";
import { baseURL } from "../utils.js/Constant";


export const axiosInstance = axios.create({
  baseURL: baseURL,
  headers: {
    "Content-Type": "application/json",
    "Authorization" : "none",
  },
});

axiosInstance.interceptors.request.use((request) => requestHandler(request));

axiosInstance.interceptors.response.use(
  (response) => successHandler(response),
  (error) => errorHandler(error)
);
