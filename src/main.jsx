import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "remixicon/fonts/remixicon.css";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { AuthenticationProvider } from "./contexts/Auth";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthenticationProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </AuthenticationProvider>
);
