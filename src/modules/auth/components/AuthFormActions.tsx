/** CUSTOM COMPONENTS */
import Button from "@shared/components/UI/Button";

/** LIBRARIES */
import { type FC } from "react";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";

/** STYLED COMPONENTS */
import StyledFormActions from "@auth/components/styled/StyledFormActions";

interface AuthFormActionsProps {
  isSubmitting: boolean;
}

const AuthFormActions: FC<AuthFormActionsProps> = ({ isSubmitting }) => {
  const { pathname } = useLocation();
  const { t } = useTranslation();

  const pathSegment = pathname.split("/").pop();
  const partOne = t("modules.auth.forms.links.part_one");
  const partTwo = t("modules.auth.forms.links.part_two");
  const partThree = t("modules.auth.forms.links.part_three");
  const partFour = t("modules.auth.forms.links.part_four");

  const links =
    pathSegment === "login" ? (
      <>
        {partOne} {partTwo} <Link to="../signup">{partThree}</Link> {partFour}
      </>
    ) : (
      <>
        <Link to="../login">{partOne}</Link> {partTwo} {partThree} {partFour}
      </>
    );

  return (
    <StyledFormActions>
      <Button disabled={isSubmitting} fullWidth>
        {isSubmitting
          ? t(`modules.auth.forms.buttons.${pathSegment}.label_loading`)
          : t(`modules.auth.forms.buttons.${pathSegment}.label`)}
      </Button>
      {links}
    </StyledFormActions>
  );
};

export default AuthFormActions;
