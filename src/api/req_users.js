import client from "./index";
export default {
  register(data) {
    return client.post("register", data);
  },
  login(data) {
    return client.post("login", data);
  },
  logout(params) {
    return client.get("logout", {
      headers: {
        Authorization: "Bearer " + params,
      },
    });
  },
  me(params) {
    return client.get("me", {
      headers: {
        Authorization: "Bearer " + params,
      },
    });
  },
};
