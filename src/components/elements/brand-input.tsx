import { createStyles, Input, InputProps } from '@mantine/core';
import { FC } from 'react';

interface IBrandInput extends InputProps {
  placeholder?: string;
}

const useStyles = createStyles((theme) => ({
  input: {
    backgroundColor: theme.colorScheme === 'dark' ? '#3d3d3d' : '#ffffff',
    boxShadow:
      theme.colorScheme === 'dark'
        ? '1px 1px 10px #272727'
        : '1px 1px 10px #eee',
    border: 'none'
  }
}));

const BrandInput: FC<IBrandInput> = ({ ...props }) => {
  const { placeholder } = props;
  const { classes } = useStyles();

  return (
    <Input
      placeholder={placeholder}
      radius="xl"
      size="lg"
      style={{ width: '100%' }}
      classNames={classes}
      rightSectionWidth={135}
      {...props}
    />
  );
};

export default BrandInput;
