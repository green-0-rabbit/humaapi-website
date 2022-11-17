import Navbar from '../components/sections/navbar';
import Footer from '../components/sections/footer';
import { FC, ReactNode } from 'react';
import styled from '@emotion/styled';

interface ILayout {
  children?: ReactNode;
}

const Layout: FC<ILayout> = ({ children }) => {
  const links = [
    { link: '/home', label: 'Home' },
    { link: '/ours-service', label: 'Our Services' },
    { link: '/aboutus', label: 'About us' },
    { link: '/contactus', label: 'Contact us' }
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
    </Container>
  );
};
export default Layout;
