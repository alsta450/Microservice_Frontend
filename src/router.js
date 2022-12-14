import { createWebHistory, createRouter } from "vue-router";
const routes =  [
  {
    path: "/",
    alias: "/users",
    name: "users",
    component: () => import("./components/MainPage")
  }
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;