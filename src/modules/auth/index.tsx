/** COMPONENTS */
import Typography from "@mui/material/Typography";

/** CUSTOM COMPONENTS */
import AuthPageBackground from "@auth/components/AuthPageBackground";

/** LIBRARIES */
import { useTranslation } from "react-i18next";

/** OTHER */
import { Outlet } from "react-router-dom";

/** STYLED COMPONENTS */
import AuthContainer from "@auth/components/styled/AuthPageContainer";
import AuthFormContainer from "@auth/components/styled/AuthFormContainer";

const AuthPage = () => {
  const { t } = useTranslation();

  return (
    <AuthContainer>
      <AuthPageBackground />
      <AuthFormContainer>
        <Typography component="h1" variant="h2">
          {t("modules.auth.forms.heading")}
        </Typography>
        <Outlet />
      </AuthFormContainer>
    </AuthContainer>
  );
};

export default AuthPage;
