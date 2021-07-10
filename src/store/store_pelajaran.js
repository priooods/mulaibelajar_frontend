import Pelajaran from "../api/req_pelajaran";
import ViewUI from "view-design";
export default {
  namespaced: true,
  state: {
    pelajaran: [],
  },
  actions: {
    FindType({ commit }, type) {
      Pelajaran.findtype(type).then((result) => {
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
  },
  mutations: {
    pelajaran(state, payload) {
      state.pelajaran = payload;
    },
  },
};
