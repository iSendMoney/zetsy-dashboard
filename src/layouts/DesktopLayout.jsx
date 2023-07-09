import React from "react";
import Navbar from "../components/Navbar";

import "./styles/DesktopLayout.style.css";
import Sidebar from "../components/Sidebar";
import Home from "../pages/Home";

export default function DesktopLayout() {
  return (
    <div>
      <Navbar />
      <main className="flex flex-row align-start">
        <Sidebar />
        <div className="flex-1 p-6 overflow-y-scroll">
          <Home />
        </div>
      </main>
    </div>
  );
}
