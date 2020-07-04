import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/basic",
    name: "Basic",
    component: () =>
      import(/* webpackChunkName: "basic" */ "../views/Basic.vue")
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
