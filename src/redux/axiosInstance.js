import axios from "axios";

const instance = axios.create({
  baseURL: "https://mint-family.com/api/process/v2/main/",
  timeout: 15000,
});

export default instance;
