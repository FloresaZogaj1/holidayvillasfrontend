// src/lib/api.js
export const API_BASE =
  import.meta.env.VITE_API_BASE ||
  process.env.REACT_APP_API_BASE ||
  "http://localhost:4000";
