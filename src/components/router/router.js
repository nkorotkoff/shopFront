import {
  createRouter,
  createWebHistory,
  createWebHashHistory,
} from "vue-router";

import Products from "../products.vue";
import Basket from "../basket.vue";
const routes = [
  { path: "/", component: Products },
  { path: "/basket", component: Basket },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
