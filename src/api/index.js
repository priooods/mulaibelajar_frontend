import axios from "axios";
const client = axios.create({
  baseURL: "https://mulaibelajar.online/mulaibelajar_backend/public/api/",
});

export default client;
