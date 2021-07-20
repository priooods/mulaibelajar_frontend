import client from "./index";
export default {
  findtype(type) {
    return client.post("pelajaran/find", { type: type });
  },
  all() {
    return client.get("pelajaran/all");
  },
  paketall() {
    return client.get("paket/all");
  },
  findpel(titl) {
    return client.post("pelajaran/findpel", { titl: titl });
  },
};
