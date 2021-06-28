import Kelas from "../api/req_kelas";
export default {
  namespaced: true,
  state: {
    managekelas: [],
    paket: [],
  },
  actions: {
    ManageKelasAll({ commit }, params) {
      Kelas.managekelas(params).then((result) => {
        if (result.data.error_code == 0)
          return commit("managekelas", result.data.data);
      });
    },
    PaketAll({ commit }, params) {
      Kelas.paketall(params).then((result) => {
        if (result.data.error_code == 0)
          return commit("paket", result.data.data);
      });
    },
  },
  mutations: {
    managekelas(state, payload) {
      state.managekelas = payload;
    },
    paket(state, payload) {
      state.paket = payload;
    },
  },
};
