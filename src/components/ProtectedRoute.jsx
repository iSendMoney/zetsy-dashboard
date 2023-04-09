import React from "react";
import { useAuthContext } from "../contexts/Auth";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const [{ authenticated }] = useAuthContext();

  if (!authenticated) return <Navigate to="/" />;
  else return <>{children}</>;
}
