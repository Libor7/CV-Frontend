/** MODELS */
import { type FieldValues, type RegisterOptions } from "react-hook-form";
import { FieldType, type ValidationRuleValueType, type IField, type ValidateType } from "./form";

// export class Field implements IField {
export class Field {
  minLength?: number;
  name: string;
  regExp?: RegExp;
  required: boolean;
  type: FieldType;
  validate?: ValidateType;
  validationRules: RegisterOptions;

  constructor(
    name: string,
    type: FieldType,
    validationRules: RegisterOptions,
    required: boolean,
    minLength?: number,
    regExp?: RegExp,
    validate?: ValidateType,
  ) {
    this.minLength = minLength;
    this.name = name;
    this.regExp = regExp;
    this.required = required;
    this.type = type;
    this.validate = validate;
    this.validationRules = validationRules;
  }

  static getValidationRule = <T extends ValidationRuleValueType>(
    message: string,
    value: T
  ) => ({
    message,
    value,
  });

  static getValidate =
    (fieldName: string, msg: string) => (value: any, values: FieldValues) =>
      value === values[fieldName] || msg;

    static customValidate = (
      validator: (value: any, values: FieldValues) => boolean,
      msg: string
    ) => (value: any, values: FieldValues) => validator(value, values) || msg;
}
