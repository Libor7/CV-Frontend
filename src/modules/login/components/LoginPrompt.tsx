/** COMPONENTS */
import { Box, Typography } from "@mui/material";

/** STYLES */
import useTheme from "@mui/material/styles/useTheme";

// interface LoginPromptProps {
//   heading: string;
//   message: string;
// }

// const LoginPrompt = ({ heading, message }: LoginPromptProps) => {
const LoginPrompt = () => {
  const { palette } = useTheme();

  return (
    <Box
      alignItems="center"
      display="flex"
      flexDirection="column"
      flexGrow={1}
      //   flexShrink={1}
      //   flexBasis="0"
      height={{ xxs: "auto", md: "100%" }}
      justifyContent="center"
      sx={{
        // backgroundColor: palette.primary.main,
        // backgroundColor: palette.primary.main,
        // background: `linear-gradient(to bottom right, ${palette.primary.dark}, ${palette.primary.light})`,
        background: `linear-gradient(to bottom right, ${palette.primary.dark}, ${palette.secondary.light})`,
        color: palette.primary.contrastText,
        // clipPath: {
        //   //   xs: "none",
        //   xxs: "polygon(0 0, 100% 0, 100% 85%, 0 95%)",
        //   md: "polygon(10% 0, 100% 0, 100% 100%, 0 100%)",
        //   //   md: "polygon(50% 0, 100% 0, 100% 100%, 0 100%, 0 0)",
        //   //   md: "polygon(10% 0, 100% 0, 100% 100%, 0 100%, 10% 70%)",
        // },
        // overflow: "hidden",
        // position: "relative",
        // px: 4,
        // py: 6,

        // "&::before": {
        //   content: '""',
        //   position: "absolute",
        //   top: 0,
        //   left: -100,
        //   width: 100,
        //   height: "100%",
        // //   background: `linear-gradient(to bottom right, ${palette.primary.dark}, ${palette.primary.light})`,
        //   background: palette.background.default,
        // //   transform: "skewX(-10deg)",
        //   zIndex: 1,
        //   display: { xs: "none", md: "block" },
        // },

        // "& > *": {
        //   position: "relative",
        //   zIndex: 2,
        // },
      }}
    >
      <Typography variant="h4" component="h1" gutterBottom>
        {/* {heading} */}
        Curriculum Vitae / CV
      </Typography>
      <Typography variant="body1">
        {/* {message} */}
        Placeholder: vyplňte polia formuláru
      </Typography>
    </Box>
  );
};

export default LoginPrompt;
