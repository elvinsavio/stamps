import { createHashRouter } from "react-router-dom";
import MainLayout from "../layout/main";
import LandingPage from "../pages/landing";
import Shop from "../pages/shop";

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
        element: <Shop />,
      },
    ],
  },
]);
