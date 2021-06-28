import client from "./index";
export default {
  mapel() {
    return client.get("pelajaran/all");
  },
};
