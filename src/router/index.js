import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/planets",
  },
  {
    path: "/planets",
    name: "Planets",
    component: () => import("@/views/Planets.vue"),
    children: [
      {
        path: ":id",
        component: () => import("@/components/PlanetPage.vue"),
      },
    ],
  },
  {
    path: "/statistics",
    name: "Statistics",
    component: () => import("@/views/Statistics.vue"),
    children: [
      {
        path: ":id",
        component: () => import("@/components/PlanetPage.vue"),
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
