/** COMPONENTS */
import Paper from "@mui/material/Paper";

/** STYLES */
import { styled } from "@mui/material/styles";

const AuthFormContainer = styled(Paper)(({ theme }) => ({
  borderRadius: "unset",
  boxShadow: theme.shadows[5],
  color: theme.palette.primary.light,
  maxWidth: "360px",
  minWidth: "160px",
  padding: theme.spacing(2),
  position: "absolute",
  left: "50%",
  top: "50%",
  transform: "translate(-50%, -50%)",

  "& > .MuiTypography-root": {
    paddingBottom: "0.25em",
    textAlign: "center",
  },

  [theme.breakpoints.up("sm")]: {
    padding: theme.spacing(3),
  },
}));

export default AuthFormContainer;
