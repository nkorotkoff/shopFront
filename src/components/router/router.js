import {
  createRouter,
  createWebHistory,
  createWebHashHistory,
} from "vue-router";

import Main from "../main.vue";
import Basket from "../basket.vue";
import CategoryProducts from "@/components/categoryProducts.vue";
const routes = [
  { path: "/", component: Main },
  { path: "/basket", component: Basket },
  {path:"/category/:id",component: CategoryProducts,name:'categoryProducts',props:true}
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
