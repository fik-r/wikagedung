import axios from "axios";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "./constants";
import Router from "next/router";
const API = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
});

API.interceptors.request.use(
  (config) => {
    if (localStorage.getItem(ACCESS_TOKEN)) {
      config.headers["Authorization"] =
        "Bearer " + localStorage.getItem(ACCESS_TOKEN);
    }
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);
API.interceptors.response.use(
  (res) => {
    return res;
  },
  (err) => {
    const originalRequest = err.config;
    if (
      err.config.url !== "api/refresh-token" &&
      err.response.status === 401 &&
      !originalRequest._retry &&
      localStorage.getItem(REFRESH_TOKEN)
    ) {
      originalRequest._retry = true;
      return API.post("api/refresh-token", {
        refreshToken: localStorage.getItem(REFRESH_TOKEN),
      })
        .then((res) => {
          const payload = res.data.payload;
          localStorage.setItem(ACCESS_TOKEN, payload.accessToken);
          localStorage.setItem(REFRESH_TOKEN, payload.refreshToken);
          return API(originalRequest);
        })
        .catch((error) => {
          localStorage.clear();
          Router.push("/login");
          return Promise.reject(error);
        });
    }
    return Promise.reject(err);
  }
);

export default API;
