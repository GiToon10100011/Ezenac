import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { ApolloProvider } from "@apollo/client";
import client from "./client.js";

createRoot(document.getElementById("root")).render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);
