/** LIBRARIES */
import {
  type FieldValues,
  RegisterOptions,
  Validate,
  type ValidationRule,
} from "react-hook-form";
import { Field } from "./Field";

export enum FieldType {
  BUTTON = "button",
  CHECKBOX = "checkbox",
  COLOR = "color",
  DATE = "date",
  DATETIME_LOCAL = "datetime-local",
  EMAIL = "email",
  FILE = "file",
  HIDDEN = "hidden",
  IMAGE = "image",
  MONTH = "month",
  NUMBER = "number",
  PASSWORD = "password",
  RADIO = "radio",
  RANGE = "range",
  RESET = "reset",
  SEARCH = "search",
  SUBMIT = "submit",
  TEL = "tel",
  TEXT = "text",
  TIME = "time",
  URL = "url",
  WEEK = "week",
}

export interface IField {
  name: string;
  type: FieldType;
  validationRules: RegisterOptions;
}

export interface IForm {
  // fields: IField[];
  fields: Field[];
}

export interface IForms {
  [key: string]: IForm;
}

type LoginForm = {
  mode: "login";
  password: string;
  username: string;
};

type SignupForm = {
  mode: "signup";
  email: string;
  password: string;
  passwordrepeat: string;
  username: string;
};

export type FormType = LoginForm | SignupForm;

// export type ValidateType = Validate<string, FormType> | Record<string, Validate<string, FormType>> | undefined;
export type ValidateType =
  | ((value: any, values: FieldValues) => string | boolean)
  | undefined;

export type ValidationRuleValueType = boolean | number | RegExp;
