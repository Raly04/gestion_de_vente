import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import "./App.css";
// import '../styles/homePage.css'
import "../styles/style.css";
import "../styles/payer.css";
import "../styles/header.css";

import "../styles/index.css";
import Inscrire from "./pages/Inscrire.jsx";
import Login from "./pages/Login.jsx";
import Position from "./pages/Position.jsx";
import Home from "./admin/home.jsx";
import HomeP from "./pages/Home.jsx";

import ListePosition from "./admin/liste-position.jsx";
import Dashboard from "./admin/dashboard.jsx";
import Reservation from "./admin/reservation.jsx";
import Payement from "./admin/payement.jsx";
import AjouterPosition from "./admin/ajouter-position.jsx";
import Reserver from "./pages/Reserver.jsx";
import Payer from "./pages/Payement.jsx";
import Faq from "./pages/Faq.jsx";
import ModifierPosition from "./admin/modifier-position.jsx";
import Orange from "./pages/Payement/Orange.jsx";
import Airtel from "./pages/Payement/Airtel.jsx";
import Mvola from "./pages/Payement/Mvola.jsx";
// import ModifierPosition from "./admin/ModifierPosition.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/inscrire",
    element: <Inscrire />,
  },
  {
    path: "/Login",
    element: <Login />,
  },
  {
    path: "/pages/accueil",
    element: <HomeP />,
  },
  {
    path: "/pages/position",
    element: <Position />,
  },
  {
    path: "/faq",
    element: <Faq />,
  },
  {
    path: "/admin/accueil",
    element: <Home />,
  },
  {
    path: "/admin/liste-position",
    element: <ListePosition />,
  },
  {
    path: "/admin/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/admin/reservation",
    element: <Reservation />,
  },
  {
    path: "/admin/payement",
    element: <Payement />,
  },
  {
    path: "/admin/ajouter-position",
    element: <AjouterPosition />,
  },
  {
    path: "/admin/modifier-position/:id",
    element: <ModifierPosition />,
  },
  {
    path: "/reserver/:id",
    element: <Reserver />,
  },
  {
    path: "payement/:id",
    element: <Payer />,
  },
  {
    path:"/payement/orange-money/:id",
    element: <Orange />
  },
  {
    path:"/payement/mobile-money/:id",
    element: <Mvola />
  },
  {
    path:"/payement/airtel-money/:id",
    element: <Airtel />
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
