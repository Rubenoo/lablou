import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { createHashRouter } from "react-router-dom";
import { RouterProvider } from "react-router";
import Zaalverhuur from "./pages/Flexruimtes/Zaalverhuur.tsx";
import VasteVerhuur from "./pages/VasteVerhuur/VasteVerhuur.tsx";
import OverHetLab from "./pages/OverHetLab/OverHetLab.tsx";
import Home from "./pages/Home/Home.tsx";
import NietGevonden from "./components/NietGevonden/NietGevonden.tsx";
import Zaal from "./pages/Flexruimtes/Zaal.tsx";

const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "flexruimtes",
        element: <Zaalverhuur />,
      },
      {
        path: "flexruimtes/:id",
        element: <Zaal />,
      },
      {
        path: "vasteverhuur",
        element: <VasteVerhuur />,
      },
      {
        path: "over",
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
