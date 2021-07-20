import client from "./index";
export default {
  findparsial(id) {
    return client.post("pelajaran/detail", { id: id });
  },
  findpaket(id) {
    return client.post("paket/find", { id: id });
  }
};
