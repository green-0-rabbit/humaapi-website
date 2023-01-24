/* eslint-disable import/no-cycle */
import { InputType } from 'react-hm-dynamic-form';
import { RecaptchaCustomProps } from '../recaptcha/types';
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable import/no-cycle */
import { CheckCustomProps } from '../reactive-checkbox';
import { PasswordFieldCustomProps } from '../reactive-password-field';
import { SelectCustomProps } from '../reactive-select';
import { TextAreaCustomProps } from '../reactive-text-area';
import { TextFieldCustomProps } from '../reactive-text-field';

export type CustomInputType =
  | InputType
  | 'datepicker'
  | 'autocomplete'
  | 'textarea'
  | 'recaptcha';

type CustomPropsType = {
  [K in CustomInputType]: any;
};
export interface ICustomProps extends CustomPropsType {
  text: TextFieldCustomProps;
  textarea: TextAreaCustomProps;
  checkCustomProps: CheckCustomProps;
  recaptcha: RecaptchaCustomProps;
  select: SelectCustomProps;
  password: PasswordFieldCustomProps;
}
