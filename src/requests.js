import axios from "axios";

// Vendos baseURL sipas mjedisit
const baseURL =
  import.meta.env.VITE_API_BASE ??
  (import.meta.env.PROD
    ? "https://holidayvillasbackend.onrender.com"
    : "https://holidayvillasbackend.onrender.com");

const http = axios.create({
  baseURL,
  headers: { "Content-Type": "application/json" },
  withCredentials: false,
});

// Shto interceptor për të dërguar token-in në çdo kërkesë
http.interceptors.request.use(config => {
  const token = localStorage.getItem("admin_token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default http;

export async function initPayment(amount, email = "", meta = {}) {
  const resp = await http.post("/api/payments/init", { amount, email, meta });
  return resp.data;  // { gate, fields, oid }
}
