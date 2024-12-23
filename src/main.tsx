/** CUSTOM COMPONENTS */
import App from "./App.tsx";

/** LIBRARIES */
// @ts-ignore
import i18n from './i18n';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

/** STYLES */
import "./index.css";
import CssBaseline from "@mui/material/CssBaseline";

const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 0,
        },
      },
    },
  },
  palette: {
    primary: {
      main: "#3f51b5",
      light: "#6573c3",
      dark: "#2c387e",
      contrastText: "#fff",
    },
    secondary: {
      main: "#009688",
      light: "#33ab9f",
      dark: "#00695f",
      contrastText: "#000",
    },
    background: {
      default: "#f5f5f5",
    },
    text: {
      primary: "#212121",
    },
    warning: {
      main: "#ff5722",
    },
  },
  typography: {
    fontFamily: ["Arial", "Cambria", "Garamond", "Times New Roman"].join(","),
  },
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </StrictMode>
);
