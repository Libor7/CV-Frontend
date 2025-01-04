/** COMPONENTS */
import TextField from "@mui/material/TextField";

/** STYLES */
import { styled } from "@mui/material/styles";

const StyledTextField = styled(TextField)(({ theme }) => ({
  marginBottom: "0.5em",

  "&:hover, &:focus, &:focus-visible": {
    outline: "none",
  },

  "& > .MuiInputBase-root": {
    borderRadius: "unset",
    color: theme.palette.primary.main,
    margin: "0.25em 0",

    "&:focus, &:focus-visible": {
      outline: "none",
    },

    "& > .MuiOutlinedInput-notchedOutline": {
      outline: "none",
    },
  },
}));

export default StyledTextField;
