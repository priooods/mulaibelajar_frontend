import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";
Vue.use(Vuex)
import pelajaran from "./store_pelajaran";
import users from "./store_users";
import pesanan from "./store_pesanan";
export default new Vuex.Store({
  plugins: [createPersistedState()],
  modules: {
    pelajaran,
    users,
    pesanan,
  },
});
