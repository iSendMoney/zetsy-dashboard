import React from "react";
import { Route, Routes } from "react-router-dom";
import Authentication from "./pages/Authentication";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";

export default function App() {
  return (
      <Routes>
        <Route path="/" element={<Authentication />} />
        <ProtectedRoute path="/dashboard" element={<Dashboard />} />
      </Routes>
  );
}
