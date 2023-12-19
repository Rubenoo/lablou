import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router";
import Zaalverhuur from "./pages/Zaalverhuur/Zaalverhuur.tsx";
import Werkplekken from "./pages/Werkplekken/Werkplekken.tsx";
import OverHetLab from "./pages/OverHetLab/OverHetLab.tsx";
import Home from "./pages/Home/Home.tsx";
import NietGevonden from "./components/NietGevonden/NietGevonden.tsx";
import Zaal from "./pages/Zaalverhuur/Zaal.tsx";

const router = createBrowserRouter([
  {
    path: "/lablou/",
    element: <App />,
    children: [
      {
        path: "zaalverhuur",
        element: <Zaalverhuur />,
      },
      {
        path: "zaalverhuur/:id",
        element: <Zaal />,
      },
      {
        path: "werkplekken",
        element: <Werkplekken />,
      },
      {
        path: "overhetlab",
        element: <OverHetLab />,
      },
      {
        path: "",
        element: <Home />,
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
