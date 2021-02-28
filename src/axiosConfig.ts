import axios from "axios";
const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URI,
  timeout: 10000,
});

export default instance;
