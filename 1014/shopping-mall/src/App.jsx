import { createBrowserRouter, RouterProvider } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import Layout from "./components/Layout";
import ProductAll from "./pages/ProductAll";
import Login from "./pages/Login";
import ProductDetail from "./pages/ProductDetail";
import { useState } from "react";
import ProtectedRoute from "./routes/ProtectedRoute";
// import About from "./routes/About";
// import Home from "./routes/Home";

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
`;

const Wrapper = styled.div``;

function App() {
  const [authentication, setAuthentication] = useState(false);

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Layout
          authentication={authentication}
          setAuthentication={setAuthentication}
        />
      ),
      children: [
        {
          index: true,
          element: <ProductAll />,
        },
        {
          path: "login",
          element: (
            <Login
              authentication={authentication}
              setAuthentication={setAuthentication}
            />
          ),
        },
        {
          path: "product/:id",
          element: <ProtectedRoute authentication={authentication} />,
        },
      ],
    },
    {},
  ]);

  return (
    <>
      <GlobalStyles />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
