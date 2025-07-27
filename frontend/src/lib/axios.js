import axios from "axios"; 

const baseURL =
  import.meta.env.PROD
    ? import.meta.env.VITE_BACKEND_URL
    : "http://localhost:4000/";

export const axiosInstance = axios.create({
  baseURL,
  withCredentials: true,
});
