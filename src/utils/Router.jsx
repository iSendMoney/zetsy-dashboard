/* eslint-disable react/prop-types */
import React from "react";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Authentication from "../pages/Authentication/Authentication";
import { auth } from "./firebase";
import DesktopLayout from "../layouts/DesktopLayout";
import NotFound from "../components/404/404";
import Home from "../pages/Home";
import Orders from "../pages/Orders";
import Products from "../pages/Products/Products";
import CreateProduct from "../pages/Products/Create";
import ProductLayout from "../layouts/ProductLayout";
import { UserContext } from "../contexts/UserContext";

export default function Router() {
  const { user, dispatch } = React.useContext(UserContext);
  // const [isAuthenticated, setIsAuthenticated] = React.useState(false);

  console.log(user);

  React.useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch({
          type: "SET_USER",
          payload: user,
        });
      } else {
        dispatch({
          type: "SET_USER",
          payload: null,
        });
      }
    });
  }, [dispatch]);

  const ProtectedRoute = ({ children }) => {
    return user ? { ...children } : <Authentication />;
  };

  // const user = auth.currentUser;
  // console.log(user);
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoute>
          <DesktopLayout />
        </ProtectedRoute>
      ),
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/orders",
          element: <Orders />,
        },
        // {
        //   path: "/products",
        //   element: <Products />,
        //   children: [
        //     {
        //       path: "/create",
        //       element: <CreateProduct />,
        //     },
        //   ],
        // },
        {
          // path: "/products",
          element: <ProductLayout />,
          children: [
            {
              path: "/products",
              element: <Products />,
            },
            {
              path: "/products/create",
              element: <CreateProduct />,
            },
          ],
        },
      ],
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
      element: !user ? <Authentication /> : <Navigate to="/" replace />,
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);

  return <RouterProvider router={router} />;
}
