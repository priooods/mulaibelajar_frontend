import router from "../router";
export default {
  namespaced: true,
  state: {
    bayar: [],
    bayarinten: [],
    checkout: [],
    check: null,
    checkinten: null,
    checkoutinten: [],
  },
  actions: {
    add({ commit }, data) {
      commit("bayar", data);
      return router.push({ path: "/pembayaran" }, () => {});
    },
    addinten({ commit }, data) {
      commit("bayarinten", data);
      return router.push({ path: "/pembayaran" }, () => {});
    },
    Checkout({ commit }, data) {
      return commit("checkout", data);
    },
    CheckoutInten({ commit }, data) {
      return commit("checkoutinten", data);
    },
  },
  mutations: {
    bayar(state, payload) {
      state.checkinten = 0;
      state.bayar = payload;
    },
    bayarinten(state, payload) {
      state.checkinten = 1;
      state.bayarinten = payload;
    },
    checkout(state, payload) {
      state.check = 0;
      state.checkout = payload;
    },
    checkoutinten(state, payload) {
      state.check = 1;
      state.checkoutinten = payload;
    },
  },
};
