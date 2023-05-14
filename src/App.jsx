import React, { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Authentication from "./pages/Authentication";
import Dashboard from "./pages/Dashboard";
import UserOnboarding from "./pages/UserOnboarding";
import { useAuthContext } from "./contexts/Auth";
import { getStore } from "./api/store";
import { useShopContext } from "./contexts/Shop";
import { toast } from "react-toastify";

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);
  const [hasStore, setHasStore] = React.useState(false);
  const [,dispatch] = useShopContext();
  const [{accessToken},authDispatch] = useAuthContext();
  const [loading, setLoading] = React.useState(true);
  useEffect(() => {
    setIsAuthenticated(!!accessToken);
    if(isAuthenticated && accessToken){
      console.log(accessToken,isAuthenticated)
      // get shop if user is authenticated
     getStore(accessToken).then(res=>{
       // store shop details in context
       
       if(res){
         dispatch({type:"shop", payload:res});
         setHasStore(true);
       }
       setLoading(false)
     }).catch(err=>{
      if(err==="Forbidden"){
        toast("Session Expired",{type:'error'})
        setIsAuthenticated(false);
        setLoading(false)
        authDispatch({type:"logout"})
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
          !isAuthenticated ? (
            <Authentication setIsAuthenticated={setIsAuthenticated} />
          ) : <Navigate to={"/dashboard"} />
        }
      />
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            {loading ? "Loading" : hasStore ? <Dashboard /> : <UserOnboarding setHasStore={setHasStore}/>}
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}
