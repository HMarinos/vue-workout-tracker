import { createRouter, createWebHistory } from "vue-router";
import Users from "../pages/Users.vue";
import Workouts from "../pages/TheWorkoutList.vue";
import Days from "../pages/TheDaysList.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/users" },
    { path: "/users", component: Users },
    {
      path: "/:id",
      component: Days,
    },
    {
      path: "/:id/:day",
      component: Workouts,
    },
  ],
});

export default router;
