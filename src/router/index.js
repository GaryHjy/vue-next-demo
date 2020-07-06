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
  },
  {
    path: "/todo-list",
    name: "TodoList",
    component: () =>
      import(/* webpackChunkName: "todo-list" */ "../views/TodoList.vue")
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
