import { AppProvider } from "@shopify/polaris";
import "@shopify/polaris/build/esm/styles.css";
import enTranslations from "@shopify/polaris/locales/en.json";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import { Provider } from "@gadgetinc/react";
import { api } from "./api";

const root = document.getElementById("root");
if (!root) throw new Error("#root element not found for booting react app");

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <MantineProvider>
      <AppProvider i18n={enTranslations}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </AppProvider>
    </MantineProvider>
  </React.StrictMode>
);
