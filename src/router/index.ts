import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Assignment",
    component: () => import("../views/Assignment.vue")
  },
  {
    path: "/guest/:id",
    name: "Itinerary",
    component: () => import("../views/Itinerary.vue")
  }
];

  const router = createRouter({
    history: createWebHistory(),
    routes
  });
  
  export default router;
  