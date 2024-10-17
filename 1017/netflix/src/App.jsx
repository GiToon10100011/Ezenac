import React, { useEffect } from "react";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import Movie from "./pages/Movie";
import MovieDetail from "./pages/MovieDetail";
import Home from "./pages/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import { movieAction } from "./redux/actions/movieAction";
import { useDispatch } from "react-redux";
import Search from "./pages/Search";

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
    color: #fff;
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
        path: "search",
        element: <Search />,
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
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(movieAction.getMovies());
  }, []);
  return (
    <>
      <GlobalStyles />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
