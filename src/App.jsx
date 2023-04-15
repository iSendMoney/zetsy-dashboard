import React, { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
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
          isAuthenticated ? (
            <Navigate to="/dashboard" />
          ) : (
            <Authentication setIsAuthenticated={setIsAuthenticated} />
          )
        }
      />
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            {hasStore ? <Dashboard /> : <UserOnboarding setHasStore={setHasStore}/>}
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}
