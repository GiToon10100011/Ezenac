import { createBrowserRouter } from "react-router-dom";
import Detail from "./pages/Detail";
import App from "./App";
import Home from "./pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "pokemon/:pokemonId",
        element: <Detail />,
      },
    ],
  },
]);

export default router;
