import React, { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Authentication from "./pages/Authentication";
import Dashboard from "./pages/Dashboard";
import UserOnboarding from "./pages/UserOnboarding";
import { useAuthContext } from "./contexts/Auth";
import { getStore } from "./api/store";
import { useShopContext } from "./contexts/Shop";

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);
  const [hasStore, setHasStore] = React.useState(false);
  const [{accessToken},] = useAuthContext();
  const [,dispatch] = useShopContext();

  useEffect(() => {
    setIsAuthenticated(!!accessToken);
    if(accessToken){
      // get shop if user is authenticated
     getStore(accessToken).then(res=>{
       // store shop details in context
       if(res.length>0){
         dispatch({type:"store", payload:res});
         setHasStore(true);
       }
     })
    }
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
