import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { createHashRouter, RouterProvider } from "react-router";
import Zaalverhuur from "./pages/Flexruimtes/Zaalverhuur.tsx";
import VasteVerhuur from "./pages/VasteVerhuur/VasteVerhuur.tsx";
import OverHetLab from "./pages/OverHetLab/OverHetLab.tsx";
import Home from "./pages/Home/Home.tsx";
import Zaal from "./pages/Flexruimtes/Zaal.tsx";
import EventementenToevoegen from "./pages/EvenementToevoegen/EvenementToevoegen.tsx";
import Agenda from "./pages/Agenda/Agenda.tsx";
import TagManager from "react-gtm-module";

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
        path: "evenementen-toevoegen",
        element: <EventementenToevoegen />,
      },
      {
        path: "agenda",
        element: <Agenda />,
      },
      {
        index: true,
        element: <Home />,
      },
      {
        path: "*",
        element: <Home />,
      },
    ],
  },
]);

const tagManagerArgs = {
  gtmId: "GTM-WTCLTHPH",
};

 
TagManager.initialize(tagManagerArgs);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
