import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Home from "./pages/Home";
import HTML from "./pages/Html";
import Css from "./pages/Css";
import Javascript from "./pages/Javascript"; 
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <h1>Error 404 - Page Not Found</h1>,
  },
  {
    path: "/Html",
    element: <HTML />,
  },
  {
    path: "/Css",
    element: <Css />,
  },
  {
    path: "/Javascript",
    element: <Javascript />,
  },
]);

const root = createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
