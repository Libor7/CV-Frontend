/** COMPONENTS */
import Box from "@mui/material/Box";

/** CUSTOM COMPONENTS */
import LoginFormArea from "./components/layouts/LoginFormArea";
import LoginPrompt from "./components/LoginPrompt";
import LoginForm from "./components/LoginForm";

const LoginPage = () => {
  console.log("LoginPage RUNS");
  
  return (
    <Box
      display="flex"
      flexDirection={{ xxs: "column-reverse", md: "row" }}
      height="100%"
    >
      <LoginFormArea>
        <LoginForm />
      </LoginFormArea>
      <LoginPrompt></LoginPrompt>
    </Box>
  );
};

export default LoginPage;
