import axios from "axios";
const API = axios.create({
  baseURL: `localhost:8081`,
});

export const fetchProducts = API.get("/products");
