/** COMPONENTS */
import { type TextFieldProps } from "@mui/material/TextField";

/** LIBRARIES */
import { forwardRef } from "react";
import { type FieldError } from "react-hook-form";
import { useTranslation } from "react-i18next";

/** STYLED COMPONENTS */
import StyledTextField from "@shared/components/styled/StyledTextField";

interface InputProps {
  err?: FieldError;
}

const Input = forwardRef<HTMLInputElement, TextFieldProps & InputProps>(
  ({ err, name, ...otherProps }, ref) => {
    const { t } = useTranslation();

    return (
      <StyledTextField
        autoComplete="on"
        error={!!err}
        helperText={err?.message}
        label={t(`modules.auth.forms.fields.${name}.label`)}
        name={name}
        ref={ref}
        {...otherProps}
      />
    );
  }
);

export default Input;
