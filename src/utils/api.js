import { ACCESS_TOKEN_VALUE } from "./constants";

const API = (url, options = {}) => {
  // Create headers object with Authorization header
  const headers = {
    Authorization: `Bearer ${ACCESS_TOKEN_VALUE}`,
    ...options.headers,
  };

  // Create and return a fetch promise
  return fetch(`${process.env.NEXT_PUBLIC_BASE_URL}${url}`, {
    ...options,
    headers,
  }).then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  });
};

export default API;
