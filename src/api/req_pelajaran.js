import client from "./index";
export default {
  findtype(type) {
    return client.post("pelajaran/find", { type: type });
  },
  all() {
    return client.get("pelajaran/all");
  },
};
