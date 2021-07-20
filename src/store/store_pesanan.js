import Pesanan from "../api/req_pesanan";
export default {
  namespaced: true,
  state: {
    pesanan: [],
    paket: [],
  },
  actions: {
    Parsial({ commit }, id) {
      Pesanan.findparsial(id).then((result) => {
        if (result.data.error_code == 0)
          return commit("pesanan", result.data.data);
      });
    },
    Paket({ commit }, id) {
      Pesanan.findpaket(id).then((result) => {
        if (result.data.error_code == 0)
          return commit("paket", result.data.data);
      });
    },
  },
  mutations: {
    pesanan(state, payload) {
      state.pesanan = payload;
    },
    paket(state, payload) {
      state.paket = payload;
    },
  },
};
