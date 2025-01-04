/** MODELS */
import { Field } from "@auth/models/Field";
import { FieldType, type FormType, type IForms } from "@auth/models/form";
import { type Validate, type FieldValues } from "react-hook-form";

export const EMAIL_REG_EXP =
  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i;
export const PASSWORD_LENGTH = 8;
export const PASSWORD_REG_EXP =
  /^(?=(.*[A-Z]))(?=(.*[a-z]))(?=(.*\d))(?=(.*[!@#$%^&*()_+={}\[\]:;"'<>,.?/\\|`~-]))[A-Za-z\d!@#$%^&*()_+={}\[\]:;"'<>,.?/\\|`~-]{8,}$/;
export const USERNAME_LENGTH = 3;

// const passwordRepeatCustomValidation: Record<string, Validate<string, FormType>> = {
//   passwordMatch: (value: any, values: FieldValues) =>
//     value === values.password || "msg",
// };

const nameField = new Field(
  "username",
  FieldType.TEXT,
  {
    // minLength: {
    //   message: "minLength",
    //   value: USERNAME_LENGTH,
    // },
    minLength: Field.getValidationRule("minLength", USERNAME_LENGTH),
    required: "required",
  },
  true,
  USERNAME_LENGTH
);

const passwordField = new Field(
  "password",
  FieldType.PASSWORD,
  {
    // minLength: {
    //   message: "minLength",
    //   value: PASSWORD_LENGTH,
    // },
    minLength: Field.getValidationRule("minLength", PASSWORD_LENGTH),
    // pattern: {
    //   message: "password_pattern",
    //   value: PASSWORD_REG_EXP,
    // },
    pattern: Field.getValidationRule("password_pattern", PASSWORD_REG_EXP),
    required: "required",
  },
  true,
  PASSWORD_LENGTH,
  PASSWORD_REG_EXP
);

const passwordRepeatField = new Field(
  "passwordrepeat",
  FieldType.PASSWORD,
  {
    // minLength: {
    //   message: "minLength",
    //   value: PASSWORD_LENGTH,
    // },
    minLength: Field.getValidationRule("minLength", PASSWORD_LENGTH),
    // pattern: {
    //   message: "password_pattern",
    //   value: PASSWORD_REG_EXP,
    // },
    pattern: Field.getValidationRule("password_pattern", PASSWORD_REG_EXP),
    // required: "required",
    required: Field.getValidationRule("required", true),
    // validate: (value, values) =>
    //   value === values.password || "Should match with Password",
    // validate: Field.getValidate("password", "password_match"),
    validate: (value: any, values: FieldValues) =>
          value === values.password || "msg",
  },
  true,
  PASSWORD_LENGTH,
  PASSWORD_REG_EXP,
);

const emailField = new Field(
  "email",
  FieldType.EMAIL,
  {
    // pattern: {
    //   message: "email_pattern",
    //   value: EMAIL_REG_EXP,
    // },
    pattern: Field.getValidationRule("email_pattern", EMAIL_REG_EXP),
    // required: "required",
    required: Field.getValidationRule("required", true),
  },
  true
);

export const forms: IForms = {
  login: {
    fields: [nameField, passwordField],
  },
  signup: {
    fields: [nameField, passwordField, passwordRepeatField, emailField],
  },
};
