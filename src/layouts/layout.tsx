import Image from 'next/image';
import { FC, ReactNode, useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { createStyles } from '@mantine/core';
import bgImage from '../../public/assets/img/gradientcircleglassmorphism.png';
import ScrollTop from '../components/modules/scroll-to-up';

const useStyles = createStyles((theme) => ({
  root: {
    background: theme.colorScheme === 'dark' ? '#27272730' : ''
  }
}));
// async function getHeader() {
//   const res = await navigationHeaderService.getHeader();
//   return res;
// }

interface ILayout {
  children: ReactNode;
}
const Container = styled.div``;

const Layout: FC<ILayout> = ({ ...props }) => {
  const { children } = props;
  const { classes } = useStyles();
  // const fheader = getHeader();
  // const [header, setHeader] = useState<any>([]);

  // async function fetchData() {
  //   try {
  //     const [pageHeader] = await Promise.all([fheader]);
  //     console.log(pageHeader);
  //     setHeader(() => pageHeader);
  //     console.log(header);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }
  // useEffect(() => {
  //   fetchData();
  // }, []);

  return (
    <Container>
      {/* <Navbar itemNavLink={DataService.navLink} /> */}
      <Image
        src={bgImage}
        alt="backgroundImage"
        quality={40}
        className={` ${
          classes.root ? 'blur-[195px]' : 'blur-[220px]'
        } object-center absolute`}
      />
      {children}
      {/* <Footer data={DataService.footerLink} /> */}
      <ScrollTop />
    </Container>
  );
};

export default Layout;
