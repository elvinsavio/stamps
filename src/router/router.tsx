import { createHashRouter } from "react-router-dom";
import MainLayout from "../layout/main";
import LandingPage from "../pages/landing";
import Shop from "../pages/shop";
import About from "../pages/about";
import Freebies from "../pages/freebies";

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
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/freebies",
        element: <Freebies />,
      },
    ],
  },
]);
