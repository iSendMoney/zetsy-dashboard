import React, { useEffect } from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import Authentication from "./pages/Authentication";
import Dashboard from "./pages/Dashboard";
import UserOnboarding from "./pages/UserOnboarding";

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);
  const [hasStore, setHasStore] = React.useState(false);

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
          isAuthenticated ? hasStore ? <Navigate to="/dashboard" /> : <Navigate to="/onboard-user" /> : <Authentication setIsAuthenticated={setIsAuthenticated} />
        }
      />
      <Route path="/onboard-user" element={<UserOnboarding/>}/>
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
