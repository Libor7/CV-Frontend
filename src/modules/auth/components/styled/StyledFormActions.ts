/** STYLES */
import { styled } from "@mui/material/styles";

const StyledFormActions = styled("div")(({ theme }) => ({
  color: theme.palette.primary.light,

  "& > .MuiButton-root": {
    fontSize: "1.5em",
    marginBottom: "0.75em",
  },

  "& > a": {
    color: theme.palette.primary.main,
    fontWeight: 700,
    textDecoration: "none",
  },

  "& > a:focus, & > a:focus-visible, & > a:hover": {
    color: theme.palette.primary.dark,
  },

  "& > a:focus, & > a:focus-visible": {
    outline: "none",
  },
}));

export default StyledFormActions;
