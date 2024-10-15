import React from "react";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import Movie from "./pages/Movie";
import MovieDetail from "./pages/MovieDetail";
import Home from "./pages/Home";
import "bootstrap/dist/css/bootstrap.min.css";

const GlobalStyles = createGlobalStyle`
  ${reset}

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  ul, li{
    list-style: none;
  }

  a{
    text-decoration: none;
    color: inherit;
  }

  body{
    background: #000;
  }
`;

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "movie",
        element: <Movie />,
      },
      {
        path: "movie/:id",
        element: <MovieDetail />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <GlobalStyles />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
