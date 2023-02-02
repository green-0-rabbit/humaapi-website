import { Button, createStyles, Input } from '@mantine/core';
import { useInputState } from '@mantine/hooks';
import navigation from '../features/navigation-hook';

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

const SearchBar = () => {
  const [stringValue, setStringValue] = useInputState('');
  const { classes } = useStyles();
  const setLocalStorage = () => {
    if (stringValue) {
      localStorage.setItem('message', stringValue);
      navigation('contact-us');
    }
  };
  return (
    <Input
      radius={80}
      placeholder="write your message"
      size="lg"
      style={{ width: '100%' }}
      classNames={classes}
      rightSectionWidth={135}
      value={stringValue}
      onChange={setStringValue}
      rightSection={
        <Button
          variant="filled"
          className="btn-custom"
          onClick={setLocalStorage}>
          Get in touch
        </Button>
      }
    />
  );
};

export default SearchBar;
