import axios from "axios";
const client = axios.create({
  baseURL: "https://mulaibelajar.online/mulaibelajar_backend/public/api/",
  // baseURL: "http://127.0.0.1:8000/api/",
});

export default client;
