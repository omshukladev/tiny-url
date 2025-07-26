import axios from "axios"; 

const baseURL =
  import.meta.env.PROD
    ? "/" // In production, frontend and backend are same domain
    : "http://localhost:4000/"; // In dev mode, talk to local backend

export const axiosInstance = axios.create({
  baseURL,
  withCredentials: true,
});
