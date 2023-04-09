import React, { useEffect } from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import Authentication from "./pages/Authentication";
import Dashboard from "./pages/Dashboard";

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);

  useEffect(() => {
    const authToken = JSON.parse(localStorage.getItem("authentication-token"));
    setIsAuthenticated(!!authToken);
  }, [isAuthenticated]);

  const ProtectedRoute = ({ children }) => {
    if (!isAuthenticated) return <Navigate to="/" />;
    else return <>{children}</>;
  };

  return (
    <Routes>
      <Route
        path="/"
        element={
          isAuthenticated ? <Navigate to="/dashboard" /> : <Authentication setIsAuthenticated={setIsAuthenticated} />
        }
      />
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}
