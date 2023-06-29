import axios from "axios";

export default axios.create({
  baseURL: "https://e-healthcare-management-system-server.onrender.com",
  withCredentials: true,
  credentials: "include",
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
  },
  timeout: 30000,
});
