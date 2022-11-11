import Navbar from '../sections/navbar';
import Footer from '../sections/footer';
import { FC, ReactNode } from 'react';

interface ILayout {
  children?: ReactNode;
}

const Layout: FC<ILayout> = ({ children }) => {
  const links = [
    { link: '/home', label: 'Home' }, 
    { link: '/ours-service', label: 'Our Services' },
    { link: '/aboutus', label: 'About us' }
  ];
  return (
    <div>
      <Navbar links={links} />
      {children}
      <Footer />
    </div>
  );
};
export default Layout;
