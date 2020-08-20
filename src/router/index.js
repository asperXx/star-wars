import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/planets/1",
  },
  {
    path: "/planets/:id",
    name: "Planets",
    component: () => import("@/views/Planets.vue"),
  },
  {
    path: "/planets/:id",
    name: "PlanetPage",
    component: () => import("@/components/PlanetPage.vue")
  },
  {
    path: "/statistics",
    name: "Statistics",
    component: () => import("@/views/Statistics.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
