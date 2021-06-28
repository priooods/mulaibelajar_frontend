import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";
Vue.use(Vuex)
import pelajaran from "./store_pelajaran";
import kelas from "./store_kelas";
import users from "./store_users";
import pesanan from "./store_pesanan";
import bayar from "./store_bayar";
export default new Vuex.Store({
  plugins: [createPersistedState()],
  modules: {
    pelajaran,
    kelas,
    users,
    pesanan,
    bayar,
  },
});
