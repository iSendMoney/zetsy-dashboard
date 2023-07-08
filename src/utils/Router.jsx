import React from "react";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Authentication from "../pages/Authentication/Authentication";
import { auth } from "./firebase";
import DesktopLayout from "../layouts/DesktopLayout";

export default function Router() {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);

  React.useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
    });
  }, []);

  const ProtectedRoute = ({ children }) => {
    return isAuthenticated ? {...children} : <Authentication setIsAuthenticated={setIsAuthenticated} />;
  };

  const user = auth.currentUser;
  // console.log(user);
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoute>
          <DesktopLayout/>
        </ProtectedRoute>
      ),
      // children: [
      //   {
      //     path: "team",
      //     element: <Team />,
      //     loader: teamLoader,
      //   },
      // ],
    },
    {
      path: "/login",
      element: !isAuthenticated ? <Authentication setIsAuthenticated={setIsAuthenticated} /> : <Navigate to="/" replace />,
    },
  ]);

  return <RouterProvider router={router} />;
}
