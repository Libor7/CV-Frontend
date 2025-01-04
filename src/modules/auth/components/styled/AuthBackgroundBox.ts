/** COMPONENTS */
import Box from "@mui/material/Box";

/** OTHER */
import backgroundImage from "@src/assets/images/background.jpg";

/** STYLES */
import { styled } from "@mui/material/styles";

const AuthBackgroundBox = styled(Box)(({ theme }) => ({
  "&:first-of-type": {
    height: "35%",
  },

  "&:nth-of-type(2)": {
    backgroundImage: `url(${backgroundImage})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "65%",
  },

  "&:nth-of-type(2)::before": {
    backgroundImage: `linear-gradient(to bottom right, ${theme.palette.primary.dark}, ${theme.palette.primary.light})`,
    content: '""',
    height: "65%",
    opacity: 0.9,
    position: "absolute",
    bottom: 0,
    right: 0,
    width: "100%",
  },

  [theme.breakpoints.up("sm")]: {
    "&:first-of-type": {
      height: "100%",
      width: "45%",
    },

    "&:nth-of-type(2)": {
      height: "100%",
      width: "55%",
    },

    "&:nth-of-type(2)::before": {
      height: "100%",
      width: "55%",
    },
  },
}));

export default AuthBackgroundBox;
