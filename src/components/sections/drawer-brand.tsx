import { Drawer, DrawerProps, useMantineTheme } from '@mantine/core';
import { FC, ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';

interface IDrawerbrand extends DrawerProps {
  children: ReactNode;
}
const Drawerbrand: FC<IDrawerbrand> = (props) => {
  const { children } = props;
  const theme = useMantineTheme();
  // const navigate = useNavigate();
  return (
    <Drawer
      overlayColor={
        theme.colorScheme === 'dark'
          ? theme.colors.dark[9]
          : theme.colors.gray[2]
      }
      overlayOpacity={0.55}
      padding="md"
      size="45%"
      overlayBlur={3}
      styles={() => ({
        root: {
          '.mantine-Drawer-drawer': {
            borderRadius: '20px 0px 0px 20px'
          }
        }
      })}
      // onClose={() => navigate(-1)}
      {...props}>
      {children}
    </Drawer>
  );
};
export default Drawerbrand;
