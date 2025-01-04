/** CUSTOM COMPONENTS */
import AuthFormActions from "@auth/components/AuthFormActions";
import Input from "@shared/components/UI/Input";

/** LIBRARIES */
import { useCallback, type FC } from "react";
import { type FieldErrors, type FieldValues, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

/** MODELS */
import { type FormType, type IForm } from "@auth/models/form";
import { Field } from "@auth/models/Field";

interface AuthFormProps {
  form: IForm;
}

const AuthForm: FC<AuthFormProps> = ({ form: { fields } }) => {
  const { t } = useTranslation();
  const {
    formState: { errors, isSubmitting },
    handleSubmit,
    register,
    reset,
  } = useForm<FormType>();  // { mode: "onChange" }

  const formHandler = useCallback((formData: FormType) => {
    console.log(formData);
    reset();
  }, []);

  const formErrorHandler = useCallback((errors: FieldErrors<FormType>) => {
    console.log(errors);
  }, []);

  return (
    <form noValidate onSubmit={handleSubmit(formHandler, formErrorHandler)}>
      {fields.map(
        ({
          minLength,
          name,
          regExp,
          required,
          // validationRules: { validate },
          type,
          validate,
          // ...otherProps
        }) => {
          return (
            <Input
              err={errors[name as keyof FormType]}
              fullWidth
              key={name}
              // {...otherProps}
              {...register(name as keyof FormType, {
                minLength: minLength
                  ? Field.getValidationRule(
                      t("modules.auth.forms.error_msgs.minLength", {
                        field: t(`modules.auth.forms.fields.${name}.label`),
                        length: minLength,
                      }),
                      minLength
                    )
                  : undefined,
                pattern: regExp
                  ? Field.getValidationRule(
                      t(`modules.auth.forms.error_msgs.${type}_pattern`, {
                        field: t(`modules.auth.forms.fields.${name}.label`),
                      }),
                      regExp
                    )
                  : undefined,
                required:
                  required &&
                  t("modules.auth.forms.error_msgs.required", {
                    name: t(`modules.auth.forms.fields.${name}.label`),
                  }),
                  validate: validate
                  ? (value: any, values: FieldValues) =>
                      Field.customValidate((value: any, values: FieldValues) => value === values.password, t("modules.auth.forms.error_msgs.password_match"))(
                        value,
                        values
                      )
                  : undefined,
                // validate: validate
                //   ? (value: any, values: FieldValues) =>
                //       value === values.password || t("modules.auth.forms.error_msgs.password_match")
                //   : undefined,
              })}
              type={type}
            />
          );
        }
      )}
      <AuthFormActions isSubmitting={isSubmitting} />
    </form>
  );
};

export default AuthForm;
