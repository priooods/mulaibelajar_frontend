import client from "./index";
export default {
  managekelas(params) {
    return client.get("manage/all", {
      params: params,
    });
  },
  paketall(params) {
    return client.get("paket/all_paket", {
      params: params,
    });
  },
};
