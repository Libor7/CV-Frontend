/** COMPONENTS */
import Button, { type ButtonProps } from "@mui/material/Button";

/** LIBRARIES */
import { type FC, type PropsWithChildren } from "react";

const ButtonComp: FC<PropsWithChildren<ButtonProps>> = ({
  children,
  ...otherProps
}) => {
  const variant = otherProps.variant || "contained";

  return (
    <Button variant={variant} {...otherProps}>
      {children}
    </Button>
  );
};

export default ButtonComp;
