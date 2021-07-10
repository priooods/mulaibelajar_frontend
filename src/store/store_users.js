import Users from "../api/req_users";
import cookies from "vue-cookies";
import router from "../router";
import ViewUI from "view-design";
export default {
  namespaced: true,
  state: {
    users: null,
  },
  actions: {
    Register({ dispatch }, data) {
      Users.register(data)
        .then((result) => {
          if (result.data.error_code == 0) {
            cookies.set("_bsf", result.data.data);
            dispatch("me", result.data.data);
            return router.push({ path: "/" }, () => {});
          } else return ViewUI.Message.error(result.data.error_message);
        })
        .catch(() => {
          return ViewUI.Message.error("Username sudah terdaftar !");
        });
    },
    Logout({ commit }) {
      Users.logout(cookies.get("_bsf"))
        .then((result) => {
          if (result.data.error_code == 0) {
            cookies.remove("_bsf");
            ViewUI.Message.success(result.data.message);
            return commit("logout");
          } else return ViewUI.Message.error("Failure Request");
        })
        .catch(() => {
          return ViewUI.Message.error("Failure");
        });
    },
    Login({ dispatch }, data) {
      Users.login(data).then((result) => {
        if (result.data.error_code == 0) {
          cookies.set("_bsf", result.data.token);
          dispatch("me", result.data.token);
          return router.push({ path: "/" }, () => {});
        } else return ViewUI.Message.error("Account tidak ditemukan !");
      });
    },
    me({ commit }, token) {
      Users.me(token)
        .then((result) => {
          if (result.data.error_code == 0) {
            return commit("me", result.data.data);
          }
        })
        .catch(() => {
          return ViewUI.Message.error("Token is Invalid");
        });
    },
  },
  mutations: {
    logout(state) {
      state.users = null;
    },
    me(state, payload) {
      state.users = payload;
    },
  },
};
