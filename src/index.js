import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { App } from "./App.tsx";

const bash = document.getElementById("root");

const root = ReactDOM.createRoot(bash);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
