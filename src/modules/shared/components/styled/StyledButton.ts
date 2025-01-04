/** COMPONENTS */
import Button from "@mui/material/Button";

/** STYLES */
import { styled } from "@mui/material/styles";

const StyledButton = styled(Button)(({ theme }) => ({
  backgroundImage: `linear-gradient(to bottom right, ${theme.palette.primary.light}, ${theme.palette.primary.dark})`,
  fontSize: "1.25em",
  textTransform: "none",

  "&.Mui-disabled": {
    backgroundColor: theme.palette.primary.main,
    backgroundImage: "none",
    color: theme.palette.primary.contrastText,
    opacity: 0.5,
  },

  "&:focus, &:focus-visible, &:hover": {
    backgroundColor: theme.palette.primary.dark,
    backgroundImage: "none",
  },
}));

export default StyledButton;
