import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Authentication from "../pages/Authentication";

export default function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Authentication />,
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
