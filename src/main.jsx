import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ToastContainer } from "react-toastify";

import "remixicon/fonts/remixicon.css";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";
import UserContextProvider from "./contexts/UserContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <UserContextProvider>
    <App />
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
      theme="light"
    />
  </UserContextProvider>
);
