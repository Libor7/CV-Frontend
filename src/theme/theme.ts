/** LIBRARIES */
import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  breakpoints: {
    values: {
      xxs: 0,
      xs: 320,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
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
      light: "#ff784e",
      dark: "#b23c17",
    },
  },
  typography: {
    fontFamily: [
      "Arial",
      "Cambria",
      "Calibri",
      "Garamond",
      "Times New Roman",
    ].join(","),
  },
});
