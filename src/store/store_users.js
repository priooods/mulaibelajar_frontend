import Users from "../api/req_users";
import cookies from "vue-cookies";
import router from "../router";
export default {
  namespaced: true,
  state: {
    token: null,
    users: [],
    logincheck: 0,
    usersall: [],
  },
  actions: {
    Register({ commit }, data) {
      Users.register(data).then((result) => {
        if (result.data.error_code == 0) {
          cookies.set("_bsf", result.data.data.token);
          commit("users", result.data.data);
          return router.push({ path: "/" }, () => {});
        }
      });
    },
    Logout({ commit }, value) {
      cookies.remove("_bsf");
      return commit("logout", value);
    },
    Login({ commit }, data) {
      Users.login(data).then((result) => {
        if (result.data.error_code == 0) {
          cookies.set("_bsf", result.data.token);
          commit("login", result.data.token);
          return router.push({ path: "/" }, () => {});
        }
      });
    },
    me({ commit }) {
      Users.me().then((result) => {
        if (result.data.error_code == 0) {
          router.push(
            {
              name: "Checkout",
            },
            () => {}
          );
          return commit("me", result.data.data[0]);
        } else return router.push({ path: "/register" }, () => {});
      });
    },
    findme({ commit }) {
      Users.me().then((result) => {
        if (result.data.error_code == 0) {
          console.log(result.data.data[0]);
          return commit("me", result.data.data[0]);
        } else false;
      });
    },
  },
  mutations: {
    users(state, payload) {
      state.users = payload.user;
      state.token = payload.token;
    },
    logout(state, payload) {
      state.users = payload;
      state.token = null;
      state.logincheck = 0;
    },
    login(state, payload) {
      state.token = payload;
      state.logincheck = 1;
    },
    me(state, payload) {
      state.users = payload;
    },
  },
};
