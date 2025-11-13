import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Home from "./pages/home";
import HTML from "./pages/html";
import Css from "./pages/css";
import Javascript from "./pages/javascript";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <h1>Error 404 - Page Not Found</h1>,
  },
  {
    path: "/html",
    element: <HTML />,
  },
  {
    path: "/css",
    element: <Css />,
  },
  {
    path: "/javascript",
    element: <Javascript />,
  },
]);

const root = createRoot(document.getElementById("root"));

// تشغيل الراوتر
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
