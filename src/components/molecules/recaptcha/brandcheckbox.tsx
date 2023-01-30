/* eslint-disable react/display-name */
import { Checkbox, CheckboxProps } from '@mantine/core';
import { forwardRef, ForwardedRef } from 'react';

const BrandCheckbox = forwardRef(
  (props: CheckboxProps, ref: ForwardedRef<HTMLInputElement>) => (
    <Checkbox
      sx={{
        '&:hover': { bgcolor: 'transparent' }
      }}
      color="default"
      ref={ref}
      {...props}
    />
  )
);
export default BrandCheckbox;
