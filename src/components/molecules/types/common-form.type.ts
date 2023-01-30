/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable import/no-cycle */
import {
  FormFieldOption,
  NestedKeyOf,
  DeepOmitVariableKind,
  Primitive,
  InputType
} from 'react-hm-dynamic-form';
import { CustomInputType, ICustomProps } from './cutom-props-interface.type';

export type DataType = object;

type FilterKeyByCustomInputType<
  T extends DataType,
  U extends CustomInputType
> = U extends 'switch' | 'checkbox'
  ? DeepOmitVariableKind<T, number | any[] | string>
  : U extends 'text' | 'select' | 'radio' | 'password' | 'datepicker'
  ? DeepOmitVariableKind<T, boolean | any[]>
  : U extends 'multiSelect'
  ? DeepOmitVariableKind<T, boolean | number | string | Record<string, any>[]>
  : U extends 'range'
  ? DeepOmitVariableKind<T, boolean | any[] | string>
  : U extends 'list'
  ? DeepOmitVariableKind<T, boolean | Primitive[] | string | number>
  : never;

type InputKeyType<T extends DataType, U extends CustomInputType> = NestedKeyOf<
  FilterKeyByCustomInputType<T, U>
>;

interface IFieldMeta<T extends DataType, U extends CustomInputType> {
  inputKey: InputKeyType<T, U>;
  label: string;
  labelDirection?: 'top' | 'right';
  inputType: U;
  inputHelperText?: string;
  options?: FormFieldOption;
}

export type ConditionalProp<T extends CustomInputType> = ICustomProps[T];

type CustomProps<U extends CustomInputType> = {
  customProps: ConditionalProp<U>;
};

/**
 *  required customProps only when CustomInputType is not text | checkbox | switch
 */
export type FieldMeta<
  T extends DataType,
  U extends CustomInputType
> = U extends
  | 'text'
  | 'checkbox'
  | 'switch'
  | 'password'
  | 'datepicker'
  | 'textarea'
  | 'recaptcha'
  ? Partial<CustomProps<U>> & IFieldMeta<T, U>
  : CustomProps<U> & IFieldMeta<T, U>;

export const createFieldsMeta = <T extends DataType, U extends CustomInputType>(
  params: FieldMeta<T, U>[]
) => params;

// ### Local ###
