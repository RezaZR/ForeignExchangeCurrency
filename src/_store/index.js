import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

import { currency } from "./modules/currency";

const debug = process.env.NODE_ENV !== "production";

export const store = new Vuex.Store({
  modules: {
    currency
  },
  strict: debug
});
