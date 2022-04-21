import axios from "axios";


export default axios.create({
    baseURL: "http://localhost:8083",
    withCredentials: true,
    credentials: "include",
    timeout: 30000,
    headers: {
        "Content-Type": "application/json"
    }
})