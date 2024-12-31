import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { Provider } from "react-redux";
import store from "./redux/store.ts";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme.ts";
import { RouterProvider } from "react-router-dom";
import router from "./Router.tsx";

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <RouterProvider router={router} />
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Provider>
);
