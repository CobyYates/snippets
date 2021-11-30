import Vue from "vue";
import VueRouter from "vue-router";
// import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Snippets",
    component: () =>
      import(/* webpackChunkName: "snippets" */ "../views/Snippets.vue"),
  },
  {
    path: "/Docs",
    name: "Docs",
    component: () =>
      import(/* webpackChunkName: "docs" */ "../views/Docs.vue"),
  },
  {
    path: "/SVGs",
    name: "SVGs",
    component: () =>
      import(/* webpackChunkName: "SVGs" */ "../views/SVGs.vue"),
  },
  {
    path: "/Links",
    name: "Links",
    component: () =>
      import(/* webpackChunkName: "Links" */ "../views/Links.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
