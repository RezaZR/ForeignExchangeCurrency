import Vue from "vue";

import axios from "axios";
import VueAxios from "vue-axios";
Vue.use(VueAxios, axios);
Vue.axios.defaults.baseURL = "https://api.exchangeratesapi.io/";

import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import { store } from "./_store";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
