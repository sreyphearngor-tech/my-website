import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:4000/api", // change to your backend
  timeout: 5000,
});

export const getProducts = () => api.get("/products");
export const getProduct = (id) => api.get(`/products/${id}`);
export const postOrder = (order) => api.post("/orders", order);

export default api;
