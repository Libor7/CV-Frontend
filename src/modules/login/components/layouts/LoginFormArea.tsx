/** COMPONENTS */
import { Box, type BoxProps } from "@mui/material";

/** LIBRARIES */
import { type ReactNode } from "react";

/** STYLES */
import useTheme from "@mui/material/styles/useTheme";

interface LoginFormAreaProps extends BoxProps {
  children: ReactNode;
}

const LoginFormArea = ({ children, ...otherProps }: LoginFormAreaProps) => {
  console.log("LoginFormArea RUNS");
  const { palette } = useTheme();

  return (
    <Box
      alignItems="center"
      display="flex"
      height={{ xxs: "auto", md: "100%" }}
      //   minWidth="50vw"
      // margin="2em"
      minHeight="40%"
      // minWidth="20em"    // min-width: 0
      justifyContent="center"
      overflow="hidden"
      position="relative"
      sx={{
        // backgroundColor: palette.primary.contrastText,
        backgroundColor: palette.background.default,
        color: palette.text.primary,

        // "&::after": {
        //   content: '""',
        //   position: "absolute",
        //   top: 0,
        //   right: -40,
        //   width: 80,
        //   height: "100%",
        //   backgroundColor: palette.background.default,
        //   transform: "skewX(-10deg)",
        //   zIndex: 1,
        //   display: { xs: "none", md: "block" },
        // },

        // "& > *": {
        //   position: "relative",
        //   zIndex: 2,
        // },
      }}
      //   minHeight="100vh"
      //   px={{ xs: 2, sm: 4, md: 6 }}
      {...otherProps}
    >
      {children}
    </Box>
  );
};

export default LoginFormArea;
