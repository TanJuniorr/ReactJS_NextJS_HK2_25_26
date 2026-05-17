import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import Tuan6 from "./Tuan6";
import "./App.css";

// Lệnh gốc để vẽ React lên màn hình
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Tuan6 />
    </BrowserRouter>
  </React.StrictMode>
);