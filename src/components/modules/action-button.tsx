import { ActionIcon, useMantineColorScheme } from '@mantine/core';
import { IconSun, IconMoonStars } from '@tabler/icons';

const ActionButton = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === 'dark';

  return (
    <ActionIcon
      className={`${dark ? 'text-[#EA6F66]' : 'bg-gray-100'}`}
      variant="outline"
      radius={'lg'}
      style={{ border: 'none' }}
      onClick={() => toggleColorScheme()}>
      {dark ? <IconSun size={18} /> : <IconMoonStars size={18} />}
    </ActionIcon>
  );
};
export default ActionButton;
