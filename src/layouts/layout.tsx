import Navbar from '../components/sections/navbar';
import Footer from '../components/sections/footer';
import { FC, ReactNode } from 'react';
import ScrollTop from '../components/modules/scroll-to-up';
import styled from '@emotion/styled';

interface ILayout {
  children?: ReactNode;
}

const Layout: FC<ILayout> = ({ children }) => {
  const links = [
    { link: '/', label: 'Home' },
    { link: '/our-services', label: 'Our Services' },
    { link: '/about-us', label: 'About us' },
    { link: '/contact-us', label: 'Contact us' }
  ];
  const texts = [
    { text: 'Privacy notice' },
    { text: 'Moderne slavery statement' }
  ];
 
  const Container = styled.div``;
   return (
    <Container> 
      <Navbar links={links} />
      {children}
      <Footer texts={texts} />
      <ScrollTop />
    </Container>
  );
};
export default Layout;
