import Pesanan from "../api/req_pesanan";
export default {
  namespaced: true,
  state: {
    pesanan: [],
    paket: [],
  },
  actions: {
    Parsial({ commit }, id) {
      return new Promise((res, rej) => {
        Pesanan.findparsial(id)
          .then((result) => {
            if (result.data.error_code == 0) {
              res(result);
              return commit("pesanan", result.data.data);
            }
          })
          .catch((err) => rej(err));
      })
    },
    Paket({ commit }, id) {
      return new Promise((res, rej) => {
        Pesanan.findpaket(id)
          .then((result) => {
            if (result.data.error_code == 0) {
              res(result);
              return commit("paket", result.data.data);
            }
          })
          .catch((err) => rej(err));
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
