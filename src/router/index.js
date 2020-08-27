import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/planets/:page",
    name: "Planets",
    component: () => import("@/views/Planets.vue"),
  },
  {
    path: "/planets/:page/:id",
    name: "PlanetPage",
    component: () => import("@/components/PlanetPage.vue")
  },
  {
    path: "/statistics",
    name: "Statistics",
    component: () => import("@/views/Statistics.vue"),
    children: [
      {
        path: "films",
        component: () => import("@/components/Films.vue"),
      },
      {
        path: "Peoples",
        component: () => import("@/components/Peoples.vue"),
      },
      {
        path: "Species",
        component: () => import("@/components/Species.vue"),
      },
      {
        path: "Venicles",
        component: () => import("@/components/Venicles.vue"),
      },
      {
        path: "Starships",
        component: () => import("@/components/Starships.vue"),
      },
    ]
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
