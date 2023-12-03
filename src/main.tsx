import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router";
import Huren from "./pages/Huren/Huren.tsx";
import Werken from "./pages/Werken/Werken.tsx";
import OverOns from "./pages/OverOns/OverOns.tsx";
import NietGevonden from "./components/NietGevonden/NietGevonden.tsx";

const router = createBrowserRouter([
  {
    path: "/lablou/",
    element: <App />,
    children: [
      {
        path: "huren",
        element: <Huren />,
      },
      {
        path: "werken",
        element: <Werken />,
      },
      {
        path: "overons",
        element: <OverOns />,
      },
      {
        path: "*",
        element: <NietGevonden />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
