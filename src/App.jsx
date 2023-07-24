import React from "react";
import Router from "./utils/Router";
import { ActiveDashboardProvider } from "./contexts/ActiveDashboardPage";

export default function App() {
  return (
    <div>
      <ActiveDashboardProvider>
        <Router />
      </ActiveDashboardProvider>
    </div>
  );
}
