import { Button, createStyles, Input, InputProps } from '@mantine/core';
import { FC } from 'react';
interface ICustomInput extends InputProps {
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

const SearchBar: FC<ICustomInput> = ({ ...props }) => {
  const { classes } = useStyles();
  return (
    <Input
      radius={80}
      placeholder="write your message"
      size='lg'
      style={{ width: '100%' }}
      classNames={classes} 
      rightSectionWidth={135}
      rightSection={
        <Button
          variant="filled"
          className="btn-custom"
          onClick={() => console.log('it works !!!')}>
          Get in touch
        </Button>
      }
    />
  );
};

export default SearchBar;
