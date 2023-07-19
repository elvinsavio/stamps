import { createHashRouter } from "react-router-dom";
import MainLayout from "../layout/main";
import LandingPage from "../pages/landing";

export const router = createHashRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/shop",
        element: <h1 className="text-3xl font-bold underline">shop</h1>,
      },
    ],
  },
]);
