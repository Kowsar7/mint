import axios from "axios";

const instance = axios.create({
  baseURL: "https://mint-family.com/api/process/v2/",
  timeout: 2000,
});

export default instance;
