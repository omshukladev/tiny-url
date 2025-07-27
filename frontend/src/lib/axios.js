import axios from "axios";

const baseURL = import.meta.env.PROD ? "/" : "http://localhost:4000/";

export const axiosInstance = axios.create({
  baseURL,
  withCredentials: true,
});
