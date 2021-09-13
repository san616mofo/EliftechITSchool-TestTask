import { createRouter, createWebHistory } from "vue-router";

import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/banks-management",
    name: "BanksManagement",
    component: () => import("../views/BanksManagement.vue"),
  },
  {
    path: "/mortgage-calculator",
    name: "MortgageCalculator",
    component: () => import("../views/MortgageCalculator.vue"),
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
