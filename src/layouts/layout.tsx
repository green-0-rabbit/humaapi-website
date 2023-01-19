import Image from 'next/image';
import { FC, ReactNode } from 'react';
import styled from '@emotion/styled';
import Footer from 'src/components/sections/footer';

import { createStyles } from '@mantine/core';
import DataService from 'src/components/content/content-data';
import bgImage from '../../public/assets/img/gradientcircleglassmorphism.png';
import ScrollTop from '../components/modules/scroll-to-up';
import Navbar from '../components/sections/navbar';
import {
  INavigationHeaderData,
  navigationHeaderService
} from 'src/services/navigation-service/navigation-header-service';
import { GetStaticProps } from 'next';

const useStyles = createStyles((theme) => ({
  root: {
    background: theme.colorScheme === 'dark' ? '#27272730' : ''
  }
}));

interface ILayout {
  children: ReactNode;
  navigationHeader: INavigationHeaderData;
}
const Container = styled.div``;

const Layout: FC<ILayout> = ({ ...props }) => {
  const { children, navigationHeader } = props;
  const { classes } = useStyles();
  return (
    <Container>
      <Navbar itemNavLink={DataService.navLink} />
      <Image
        src={bgImage}
        alt="backgroundImage"
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
export const getStaticProps: GetStaticProps = async () => {
  const navigationHeaderData = await navigationHeaderService.getAll();
  // const cookiePolicyContent = await cookieService.get();
  return {
    props: {
      navigationHeaderData
    }
  };
};

export default Layout;
