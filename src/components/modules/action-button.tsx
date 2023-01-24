import { ActionIcon, createStyles, useMantineColorScheme } from '@mantine/core';
import { IconSun, IconMoonStars } from '@tabler/icons';

const useStyles = createStyles((theme) => ({
  btnColor: { color: theme.colorScheme === 'dark' ? '#EA6F66' : '#3c3d3f' }
}));
const ActionButton = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === 'dark';
  const { classes } = useStyles();

  return (
    <ActionIcon
      className={`${classes.btnColor}`}
      variant="outline"
      radius="lg"
      style={{ border: 'none' }}
      onClick={() => toggleColorScheme()}>
      {dark ? <IconSun size={18} /> : <IconMoonStars size={18} />}
    </ActionIcon>
  );
};
export default ActionButton;
