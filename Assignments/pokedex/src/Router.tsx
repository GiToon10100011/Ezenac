import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import Detail from "./pages/Detail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: ":pokemonId",
        element: <Detail />,
      },
    ],
  },
]);

export default router;
