/** COMPONENTS */
import { type ButtonProps } from "@mui/material/Button";

/** LIBRARIES */
import { type FC } from "react";

/** STYLED COMPONENTS */
import StyledButton from "@shared/components/styled/StyledButton";

const ButtonComp: FC<ButtonProps> = ({
  type = "submit",
  variant = "contained",
  ...otherProps
}) => {
  return (
    <StyledButton
      disableElevation
      disableRipple
      disableFocusRipple
      disableTouchRipple
      type={type}
      variant={variant}
      {...otherProps}
    />
  );
};

export default ButtonComp;
