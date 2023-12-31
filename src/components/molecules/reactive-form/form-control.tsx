import { SmartInputType, IFormControl } from 'react-hm-dynamic-form';
import {
  Box,
  BoxProps,
  Tooltip,
  InputWrapperProps,
  Input
} from '@mantine/core';
import { IconHelp } from '@tabler/icons';

type CustomBoxProps = BoxProps & React.ComponentPropsWithRef<'div'>;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const FormControl = <T extends Record<string, any>>(props: IFormControl<T>) => {
  const {
    inputKey,
    label,
    labelDirection = 'top',
    options,
    inputHelperText,
    methods,
    errors,
    customProps,
    renderInput,
    ...rest
  } = props;

  // eslint-disable-next-line @typescript-eslint/naming-convention
  const _customProps = customProps as unknown as {
    hidden: boolean;
  };
  const error = errors || undefined;

  const erroMessage = error?.message;
  const helperText = erroMessage || inputHelperText;
  const helperId = `${inputKey}-helper`;
  const labelProps: Omit<InputWrapperProps, 'children'> = {
    id: inputKey,
    label,
    sx: {
      width: '100%',
      fontSize: '12px',
      '.mantine-InputWrapper-label': {
        fontWeight: 'normal',
        fontSize: '12px',
        color: error && 'red'
      }
    },
    required: !!options?.required,
    error: Boolean(error)
  };
  const labelDirectionProps: CustomBoxProps = {
    sx: {
      display: 'flex',
      alignItems: labelDirection === 'top' ? 'flex-start' : 'center',
      justifyContent: labelDirection === 'right' ? 'flex-end' : undefined,
      flexDirection: labelDirection === 'top' ? 'column' : 'row-reverse'
    }
  };
  const helperProps: CustomBoxProps = {
    id: helperId,
    sx: {
      color: error ? 'red' : undefined,
      height: '15px',
      marginBottom: '5px'
    }
  };
  const helperTextBoxProps: CustomBoxProps = {
    sx: {
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis',
      overflow: 'hidden',
      paddingRight: '4px',
      maxWidth: '95%',
      fontSize: '10px'
    }
  };

  const inputProps: SmartInputType<T> = {
    inputKey,
    methods,
    options,
    helperId,
    customProps,
    errors
  };

  return (
    <Box
      data-field={inputKey}
      {...rest}
      sx={{ display: _customProps && _customProps.hidden ? 'none' : 'block' }}>
      <Box sx={labelProps.sx}>
        {/* <InputLabel {...labelProps}>{label}</InputLabel> */}
        <Input.Wrapper {...labelProps} {...labelDirectionProps}>
          {renderInput(inputProps)}
        </Input.Wrapper>
      </Box>
      <Box {...helperProps}>
        {helperText ? (
          <Tooltip label={helperText} position="bottom" withArrow>
            <Box sx={{ display: 'flex', userSelect: 'none' }}>
              <Box {...helperTextBoxProps}>{helperText}</Box>
              <Box>
                <IconHelp size={12} strokeWidth={2} />
              </Box>
            </Box>
          </Tooltip>
        ) : (
          ' '
        )}
      </Box>
    </Box>
  );
};

export default FormControl;
