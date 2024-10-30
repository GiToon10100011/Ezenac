import React from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";
import App from "./Root";
import Coins from "./routes/Coins";
import Coin from "./routes/Coin";
import Chart from "./routes/Chart";
import Price from "./routes/Price";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Coins />,
      },
      {
        path: "/:coinId",
        element: <Coin />,
        children: [
          
          {
            path: "chart",
            element: <Chart />,
          },
          {
            path: "price",
            element: <Price />,
          },
        ],
      },
    ],
  },
]);

const Router = () => {
  return <div></div>;
};

export default Router;
