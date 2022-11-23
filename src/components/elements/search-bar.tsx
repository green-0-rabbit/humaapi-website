import { createStyles, Input } from '@mantine/core';
import ButtonCustom from './button';

const useStyles = createStyles(() => ({
  input: {
    backgroundColor: '#ffffff',
    boxShadow: '1px 1px 10px #eee',
    border: 'none'
  }
}));

const Searchbar = () => {
  const { classes } = useStyles();
  return (
    <Input
      placeholder="Write your message"
      radius="xl"
      size="lg"
      style={{ width: '100%' }}
      classNames={classes}
      rightSection={<ButtonCustom link={'/'} content={'Get in touch'} />}
      rightSectionWidth={135}
    />
  );
};

export default Searchbar;
