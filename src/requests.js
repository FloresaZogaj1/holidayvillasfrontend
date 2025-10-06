// src/requests.js
import axios from "axios";

const API_BASE =
  import.meta.env.VITE_API_BASE ||
  window?.__API_BASE__ ||
  "http://localhost:4000";

const http = axios.create({
  baseURL: API_BASE, // ← jo "/"
  withCredentials: false,
});

export default http;
