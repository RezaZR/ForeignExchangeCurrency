export const alert = {
  namespaced: true,
  state: {
    type: "",
    message: ""
  },
  getters: {},
  actions: {
    success({ commit }, message) {
      commit("success", message);
    },
    error({ commit }, message) {
      commit("error", message);
    }
  },
  mutations: {
    success(state, message) {
      state.type = "alert-success";
      state.message = message;
    },
    error(state, message) {
      state.type = "alert-danger";
      state.message = message;
    }
  }
};
