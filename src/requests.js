import axios from "axios";

const baseURL =
  import.meta.env.VITE_API_BASE ??
  (import.meta.env.PROD
    ? "https://holidayvillasbackend.onrender.com"
    : "http://localhost:4000");

const http = axios.create({
  baseURL,
  headers: { "Content-Type": "application/json" },
  withCredentials: false,
});

export default http;
