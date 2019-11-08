export const alert = {
  namespaced: true,
  state: {
    type: "",
    message: "",
    isActive: false
  },
  getters: {},
  actions: {
    success({ commit }, message) {
      commit("setSuccess", message);
    },
    error({ commit }, message) {
      commit("setError", message);
    },
    isActive({ commit }) {
      commit("setIsActive");
    }
  },
  mutations: {
    setSuccess(state, message) {
      state.type = "success";
      state.message = message;
      state.isActive = true;
    },
    setError(state, message) {
      state.type = "error";
      state.message = message;
      state.isActive = true;
    },
    setIsActive(state) {
      state.isActive = false;
    }
  }
};
