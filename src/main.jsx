// src/main.jsx
import React from "react";
import { createRoot } from "react-dom/client";
import "./i18n"; // <- e rëndësishme
import App from "./App.jsx";
import "./globals.css"; // ← vetëm kjo (hiq index.css të dyta/duble)


createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
