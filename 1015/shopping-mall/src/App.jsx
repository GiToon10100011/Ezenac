import { useEffect, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import Layout from "./components/Layout";
import ProductAll from "./pages/ProductAll";
import Login from "./pages/Login";
import ProtectedRoute from "./routes/ProtectedRoute";
import { useSelector } from "react-redux";
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
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  useEffect(() => {
    setAuthentication(isAuthenticated);
  }, [isAuthenticated]);

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
