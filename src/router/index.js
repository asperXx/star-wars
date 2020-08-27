import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/planets/1",
  },
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
    redirect: "/statistics/films/1",
    component: () => import("@/views/Statistics.vue"),
    children: [
      {
        path: "films/:page",
        component: () => import("@/components/Films.vue"),
      },
      {
        path: "peoples/:page",
        component: () => import("@/components/Peoples.vue"),
      },
      {
        path: "species/:page",
        component: () => import("@/components/Species.vue"),
      },
      {
        path: "vehicles/:page",
        component: () => import("@/components/Vehicles.vue"),
      },
      {
        path: "starships/:page",
        component: () => import("@/components/Starships.vue"),
      },
    ]
  },
];

const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes,
});

export default router;
