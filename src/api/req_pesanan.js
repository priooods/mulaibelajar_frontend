import client from "./index";
export default {
  findparsial(id) {
    return client.post("pelajaran/findid", { id: id });
  },
};
