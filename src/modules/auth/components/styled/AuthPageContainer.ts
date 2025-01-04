/** COMPONENTS */
import Container from "@mui/material/Container";

/** STYLES */
import { styled } from "@mui/material/styles";

const AuthPageContainer = styled(Container)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  height: "100%",

  "&.MuiContainer-root": {
    maxWidth: "none",
    padding: 0,
  },

  [theme.breakpoints.up("sm")]: {
    flexDirection: "row",
  },
}));

export default AuthPageContainer;
