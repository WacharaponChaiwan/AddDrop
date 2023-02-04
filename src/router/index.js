import { createRouter, createWebHistory } from "vue-router";
import News from "../views/News.vue";
import Major from "../views/Major.vue"
import Addorp from "../views/Addorp.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "new",
    },
    {
      path: "/News",
      name: "News",
      component: News,
    },
    {
      path: "/",
      name: "Major",
    },
    {
      path: "/Major",
      name: "Major",
      component: Major,
    },
    {
      path: "/",
      name: "Addorp",
    },
    {
      path: "/Addorp",
      name: "Addorp",
      component: Addorp,
    },
  ],
});

export default router;
