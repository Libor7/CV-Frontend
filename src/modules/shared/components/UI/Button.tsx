/** COMPONENTS */
import Button, { type ButtonProps } from "@mui/material/Button";

/** LIBRARIES */
import { type FC } from "react";

const ButtonComp: FC<ButtonProps> = (props) => {
  const variant = props.variant || "contained";

  return (
    <Button
      disableElevation
      disableRipple
      disableFocusRipple
      disableTouchRipple
      variant={variant}
      {...props}
    />
  );
};

export default ButtonComp;
