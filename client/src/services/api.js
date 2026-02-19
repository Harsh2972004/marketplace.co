import axios from "axios";

export const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:8080/api",
  withCredentials: true,
});

API.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (token) config.headers.Authorization = `Bearer ${token}`;

  return config;
});

API.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem("token");
    }
    return Promise.reject(error);
  },
);

export const getProducts = (search, page, limit) =>
  API.get(`/products`, { params: { search, page, limit } });

export const getProductById = (id) => API.get(`/products/${id}`);

export const registerUser = (form) => API.post("/auth/register", form);

export const loginUser = (form) => API.post("/auth/login", form);

export const addToFavourites = (productId) =>
  API.post(`/favourites/${productId}`);

export const removeFromFavourites = (productId) =>
  API.delete(`/favourites/${productId}`);

export const getFavourites = () => API.get("/favourites");
