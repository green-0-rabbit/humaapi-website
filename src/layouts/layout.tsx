import Navbar from '../components/sections/navbar';
import Image from 'next/image';
import { FC, ReactNode } from 'react';
import ScrollTop from '../components/modules/scroll-to-up';
import styled from '@emotion/styled';
import Footer from 'src/components/sections/footer';
import bgImage from '../../public/assets/img/gradientcircleglassmorphism.png';

import { createStyles } from '@mantine/core';
import DataService from 'src/components/content/content-data';
const useStyles = createStyles((theme) => ({
  root: {
    background: theme.colorScheme === 'dark' ? '#27272730' : ''
  }
}));

interface ILayout {
  children?: ReactNode;
}

const Layout: FC<ILayout> = ({ children }) => {
  const { classes } = useStyles();
  const Container = styled.div``;
  return (
    <Container>
      <Navbar itemNavLink={DataService.navLink} />
      <Image
        src={bgImage}
        alt={'backgroundImage'}
        quality={40}
        className={` ${
          classes.root ? 'blur-[195px]' : 'blur-[220px]'
        } object-center absolute`}
      />
      {children}
      <Footer data={DataService.footerLink} />
      <ScrollTop />
    </Container>
  );
};
export default Layout;
