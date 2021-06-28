import Pelajaran from "../api/req_pelajaran";
export default {
  namespaced: true,
  state: {
    pelajaran: [],
  },
  actions: {
    PelajaranAll({ commit }) {
      Pelajaran.mapel().then((result) => {
        return commit("pelajaran", result.data.data);
      });
    },
  },
  mutations: {
    pelajaran(state, payload) {
      state.pelajaran = payload;
    },
  },
};
