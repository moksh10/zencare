import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:8084",
  withCredentials: false,
  credentials: "include",
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
  },
  timeout: 30000,
});
