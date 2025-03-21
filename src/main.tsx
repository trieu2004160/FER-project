import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
console.log("Supabase URL:", import.meta.env.VITE_SUPABASE_URL);
console.log("Supabase Key:", import.meta.env.VITE_SUPABASE_ANON_KEY);
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App></App>
  </React.StrictMode>
);
