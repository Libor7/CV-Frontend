/** COMPONENTS */
import CircularProgress from "@mui/material/CircularProgress";

/** STYLES */
import { styled } from "@mui/system";

const StyledLoadingSpinner = styled(CircularProgress)(({ theme }) => ({
  color: theme.palette.primary.main,
  left: "calc(50% - 2.5em)",
  position: "absolute",
  top: "calc(50% - 2.5em)",
  width: "5em",
}));

export default StyledLoadingSpinner;
