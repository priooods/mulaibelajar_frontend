import Pelajaran from "../api/req_pelajaran";
import ViewUI from "view-design";
export default {
  namespaced: true,
  state: {
    pelajaran: [],
    paket: [],
  },
  actions: {
    FindType({ commit }, type) {
      Pelajaran.findtype(type).then((result) => {
        if (result.data.error_code == 0)
          return commit("pelajaran", result.data.data);
        else return ViewUI.Message.error("Failure Request");
      });
    },
    FindPel({ commit }, titl) {
      Pelajaran.findpel(titl).then((result) => {
        if (result.data.error_code == 0)
          return commit("pelajaran", result.data.data);
        else return ViewUI.Message.error("Failure Request");
      });
    },
    all({ commit }) {
      Pelajaran.all()
        .then((result) => {
          if (result.data.error_code == 0)
            return commit("pelajaran", result.data.data);
          else return ViewUI.Message.error("Failure Request");
        })
        .catch(() => {
          return ViewUI.Message.error("Failure Request");
        });
    },
    paketall({ commit }) {
      Pelajaran.paketall()
        .then((result) => {
          if (result.data.error_code == 0)
            return commit("paket", result.data.data);
          else return ViewUI.Message.error("Failure Request");
        })
        .catch(() => {
          return ViewUI.Message.error("Failure Request");
        });
    },
  },
  mutations: {
    pelajaran(state, payload) {
      state.pelajaran = payload;
    },
    paket(state, payload) {
      state.paket = payload;
    },
  },
};
