/** COMPONENTS */
import Box from "@mui/material/Box";

/** CUSTOM COMPONENTS */
import LoginFormArea from "./components/layouts/LoginFormArea";
import LoginPrompt from "./components/LoginPrompt";

const LoginPage = () => {
  return (
    <Box
      display="flex"
      flexDirection={{ xxs: "column-reverse", md: "row" }}
      height="100%"
    >
      <LoginFormArea>LoginFormArea placeholder</LoginFormArea>
      <LoginPrompt></LoginPrompt>
    </Box>
  );
};

export default LoginPage;
