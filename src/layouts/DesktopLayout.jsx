import Navbar from "../components/Navbar";

import "./styles/DesktopLayout.style.css";
import Sidebar from "../components/Sidebar";
import Home from "../pages/Home";
import { useActiveDashboard } from "../contexts/ActiveDashboardPage";
import Orders from "../pages/Orders";
import Products from "../pages/Products/Products";
import { Outlet } from "react-router-dom";

export default function DesktopLayout() {
  // const [activeDashboard] = useActiveDashboard();
  return (
    <div>
      <Navbar />
      <main className="flex flex-row align-start">
        <Sidebar />
        <div className="flex-1 p-6 h-[93vh] overflow-y-scroll">
          <Outlet />
          {/* {activeDashboard === "home" && <Home />}
          {activeDashboard === "orders" && <Orders/>}
          {activeDashboard === "products" && <Products/>} */}
        </div>
      </main>
    </div>
  );
}
