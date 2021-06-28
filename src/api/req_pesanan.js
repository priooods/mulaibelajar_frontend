import client from "./index";
import cookies from "vue-cookies";
export default {
  add(data) {
    return client.post("pesanan/add", data);
  },
  login(data) {
    return client.post("login", data);
  },
  me() {
    return client.get("me", {
      headers: {
        Authorization: "Bearer " + cookies.get("_bsf"),
      },
    });
  },
};
