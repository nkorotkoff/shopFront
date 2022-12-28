import axios from "axios";
const API = axios.create({
  baseURL: `http://localhost:8081`,
});

export const fetchProducts = API.get("products/get-all-products");
export const fetchCategories = API.get("categories/get-categories");
export const fetchOneCategory = (id) =>
  API.get(`products/get-productby-category?id=${id}`);
