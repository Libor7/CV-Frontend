/** CUSTOM COMPONENTS */
import App from "@src/App.tsx";

/** LIBRARIES */
import { I18nextProvider } from "react-i18next";
import { ThemeProvider } from "@mui/material/styles";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

/** OTHER */
import i18n from "@src/i18n";

/** STYLES */
import "@src/index.scss";
import CssBaseline from "@mui/material/CssBaseline";
import { theme } from "@src/theme/theme";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <I18nextProvider i18n={i18n}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </I18nextProvider>
  </StrictMode>
);
