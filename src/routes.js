import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: "/",
      name: "Home",
      component: () => import("@/components/Home"),
    },
    {
      path: "/users",
      name: "TableView",
      component: () => import("@/components/usuarios/TableView"),
    },
    {
      path: "/adduser",
      name: "AddUser",
      component: () => import("@/components/usuarios/AddUser"),
    },
  ],
});
