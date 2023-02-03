import Image from 'next/image';
import { FC, ReactNode, useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { createStyles } from '@mantine/core';
import Navbar from 'src/components/sections/navbar';
import Footer from 'src/components/sections/footer';
import {
  INavigationFooterData,
  INavigationHeaderData
} from 'src/services/navigation-service';
import { parseFooter } from 'src/services/navigation-service/helper-function';
import bgImage from '../../public/assets/img/gradientcircleglassmorphism.png';
import ScrollTop from '../components/modules/scroll-to-up';

const useStyles = createStyles((theme) => ({
  root: {
    background: theme.colorScheme === 'dark' ? '#27272730' : ''
  }
}));

interface ILayout {
  children: ReactNode;
  navigationHeaderData: INavigationHeaderData[];
  navigationFooterData: INavigationFooterData[];
}
const Container = styled.div``;

const Layout: FC<ILayout> = ({ ...props }) => {
  const { children, navigationHeaderData, navigationFooterData } = props;
  const { classes } = useStyles();
  const itemFooter = parseFooter(navigationFooterData);
  return (
    <Container>
      <Navbar itemNavLink={navigationHeaderData} />
      <Image
        src={bgImage}
        alt="backgroundImage"
        quality={40}
        className={` ${
          classes.root ? 'blur-[195px]' : 'blur-[220px]'
        } object-center absolute`}
      />
      {children}
      <Footer itemFooter={itemFooter} />
      <ScrollTop />
    </Container>
  );
};

export default Layout;
