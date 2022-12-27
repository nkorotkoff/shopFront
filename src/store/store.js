import * as api from "./api";
import { defineStore } from "pinia";

export const useProductsStore = defineStore("products", {
  id: "products",
  state: () => ({
    products,
  }),
  actions: {
    async getProducts() {
      try {
        this.products = await fetchProducts();
      } catch (error) {
        console.log(error);
      }
    },
  },
});
