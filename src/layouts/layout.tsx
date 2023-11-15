import Image from 'next/image';
import { FC, ReactNode } from 'react';
import styled from '@emotion/styled';
import { createStyles } from '@mantine/core';
import Navbar from 'src/components/sections/navbar';
import Footer from 'src/components/sections/footer';
import { INavigation, INetwork } from 'src/services/navigation-service';
import Head from 'next/head';
import { IServiceCard } from 'src/services/our-service-service';
import bgImage from '../../public/assets/img/gradientcircleglassmorphism.png';
import ScrollTop from '../components/modules/scroll-to-up';

const useStyles = createStyles((theme) => ({
  root: {
    background: theme.colorScheme === 'dark' ? '#27272730' : ''
  }
}));

interface ILayout {
  children: ReactNode;
  navigationData: INavigation[];
  serviceData: IServiceCard[];
  pageTitle: string;
  networkData: INetwork[];
}
const Container = styled.div``;

const Layout: FC<ILayout> = ({ ...props }) => {
  const { children, navigationData, pageTitle, serviceData, networkData } =
    props;
  const { classes } = useStyles();

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <Container>
        <Navbar itemNavLink={navigationData} networkData={networkData} />
        <Image
          src={bgImage}
          alt="backgroundImage"
          quality={40}
          className={` ${
            classes.root ? 'blur-[195px]' : 'blur-[220px]'
          } absolute object-center`}
        />
        {children}
        <Footer
          navigationData={navigationData}
          serviceData={serviceData}
          networkData={networkData}
        />
        <ScrollTop />
      </Container>
    </>
  );
};

export default Layout;
