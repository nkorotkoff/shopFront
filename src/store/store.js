import * as api from "./api";
import {defineStore} from "pinia";

export const useProductsStore = defineStore("products", {
    state: () => ({
        products: {},
        basket: {},
        categories: [],
    }),
    actions: {
        async getProducts() {
            try {
                let data = await api.fetchProducts;
                this.products = data.data;
            } catch (error) {
                console.log(error);
            }
        },
        async getCategories() {

            try {
                let data = await api.fetchCategories;
                this.categories = data.data;
            } catch (error) {
                console.log(error);
            }
        },
        async getProductsByCategory(id) {

            try {
                const data = await api.fetchOneCategory(id);
                this.products = data.data;
            } catch (error) {
                console.log(error);
            }
        },
        },
        getters: {
            productsList() {
                return this.products;
            },
            categoriesList() {
                return this.categories;
            },

        },
    });
