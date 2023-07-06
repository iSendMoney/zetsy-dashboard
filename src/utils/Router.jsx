import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Authentication from "../pages/Authentication/Authentication";
import { auth } from "./firebase";

export default function Router() {
  const user = auth.currentUser;
  const router = createBrowserRouter([
    {
      path: "/",
      element: user ? <p>Dashboard</p> :<Authentication />,
      // children: [
      //   {
      //     path: "team",
      //     element: <Team />,
      //     loader: teamLoader,
      //   },
      // ],
    },
  ]);

  return <RouterProvider router={router} />;
}
