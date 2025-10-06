import axios from "axios";

const API_BASE =
  import.meta.env.VITE_API_BASE || "https://holidayvillasbackend.onrender.com";

const http = axios.create({
  baseURL: API_BASE,
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default http;
