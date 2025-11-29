import Home from "./pages/Home";
import HTML from "./pages/Html";
import Css from "./pages/Css";
import Javascript from "./pages/Javascript";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
//level II
import { useContext } from "react";
import ThemeContext from "./context/ThemeContext";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";


const router = createBrowserRouter([
  {
    path: "/signin",
    element: <Signin />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
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

function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`${theme}`}>
      <RouterProvider router={router} />;
    </div>
  );
}

export default App;
