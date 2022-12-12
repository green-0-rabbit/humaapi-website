import { Box } from '@mantine/core';
import { FC } from 'react';
import { DynamicFields, SmartFieldType } from 'react-hm-dynamic-form';
import { ReactiveCheckbox } from '../reactive-checkbox';
import { ReactiveSelect } from '../reactive-select';
import { ReactiveTextArea } from '../reactive-text-area';
import { ReactiveTextField } from '../reactive-text-field';
import ReactiveReCaptcha from '../recaptcha/recaptcha';
import { CustomInputType } from '../types';

type RenderFieldsType = Parameters<
  Parameters<typeof DynamicFields>['0']['renderFields']
>[0];

type InputProps = Omit<RenderFieldsType, 'inputType'>;

const fields: SmartFieldType<CustomInputType> = {
  text: (fieldProps: InputProps) => <ReactiveTextField {...fieldProps} />,
  textarea: (fieldProps: InputProps) => <ReactiveTextArea {...fieldProps} />,
  password: (fieldProps: InputProps) => <Box />,
  select: (fieldProps: InputProps) => <ReactiveSelect {...fieldProps} />,
  checkbox: (fieldProps: InputProps) => <ReactiveCheckbox {...fieldProps} />,
  recaptcha: (fieldProps: InputProps) => <ReactiveReCaptcha {...fieldProps} />,
  range: (fieldProps: InputProps) => <Box />,
  switch: (fieldProps: InputProps) => <Box />,
  multiSelect: (fieldProps: InputProps) => <Box />,
  radio: (fieldProps: InputProps) => <Box />,
  datepicker: (fieldProps: InputProps) => <Box />,
  autocomplete: (fieldProps: InputProps) => <Box />
};

const RenderFields: FC<RenderFieldsType> = (props) => {
  const { inputType, ...inputProps } = props;

  const component = fields[inputType];
  return component(props);
};

export default RenderFields;
