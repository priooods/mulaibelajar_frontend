import Pesanan from "../api/req_pesanan";
export default {
  namespaced: true,
  state: {
    pesanan: [],
  },
  actions: {
    Add({ commit }, data) {
      Pesanan.add(data).then((result) => {
        console.log(result);
        if (result.data.error_code == 0)
          return commit("pesanan", result.data.data);
      });
    },
  },
  mutations: {
    pesanan(state, payload) {
      state.pesanan = payload;
    },
  },
};
