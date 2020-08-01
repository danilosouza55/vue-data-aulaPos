import Vue from "vue";
import App from "./App.vue";
import router from "./routes";
import { http } from "./http";

Vue.config.productionTip = false;

new Vue({
  http,
  router,
  render: (h) => h(App),
}).$mount("#app");
