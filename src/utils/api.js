import axios from "axios";
import { ACCESS_TOKEN_VALUE } from "./constants";
const API = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
});

API.interceptors.request.use(
  (config) => {
    config.headers["Authorization"] =
        "Bearer " + ACCESS_TOKEN_VALUE;
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

export default API;
