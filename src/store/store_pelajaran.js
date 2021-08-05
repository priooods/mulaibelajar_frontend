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
      return new Promise((res, reject) => {
        Pelajaran.findtype(type)
          .then((result) => {
            commit("pelajaran", result.data.data);
            res(result);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
    FindPel({ commit }, titl) {
      return new Promise((resolve, reject) => {
        Pelajaran.findpel(titl)
          .then((result) => {
            commit("pelajaran", result.data.data);
            return resolve(result);
          })
          .catch((error) => {
            reject(error);
          });
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
    paketall(context) {
      return new Promise((resolve, reject) => {
        Pelajaran.paketall()
          .then((result) => {
            context.commit("paket", result.data.data);
            return resolve(result);
          })
          .catch((error) => {
            reject(error);
          });
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
