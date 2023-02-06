import { createRouter, createWebHistory } from "vue-router";
import NewsView from "../views/NewsView.vue";
import MajorView from "../views/MajorView.vue";
import AddorpView from "../views/AddorpView.vue";

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
      component: NewsView,
    },
    {
      path: "/",
      name: "Major",
    },
    {
      path: "/Major",
      name: "Major",
      component: MajorView,
    },
    {
      path: "/",
      name: "Addorp",
    },
    {
      path: "/Addorp",
      name: "Addorp",
      component: AddorpView,
    },
  ],
});

export default router;
