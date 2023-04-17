import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "remixicon/fonts/remixicon.css";

import { AuthenticationProvider } from "./contexts/Auth";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";
import { ShopProvider } from "./contexts/Shop";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthenticationProvider>
    <ShopProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    <ToastContainer
      position="top-center"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="dark"
    />
    </ShopProvider>
  </AuthenticationProvider>
);
