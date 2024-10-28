import React from "react";
import {
  BrowserRouter,
  createBrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import App from "./Root";
import NotFound from "./components/NotFound";
import ErrorComponent from "./components/ErrorComponent";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
        errorElement: <ErrorComponent />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
    errorElement: <NotFound />,
  },
]);

export default Router;
