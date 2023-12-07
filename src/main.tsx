import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App.tsx";
import VendorProfile from "./pages/VendorProfile.tsx";
import { BrowserRouter } from "react-router-dom";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <VendorProfile userID={1} />
    </BrowserRouter>
  </React.StrictMode>
);
