import Navbar from '../components/sections/navbar';
import Footer from '../components/sections/footer';
import { FC, ReactNode } from 'react';
import bgImage from '../../public/assets/img/gradientcircleglassmorphism.png';
import Image from 'next/image';
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
  const Bgresponsive = styled.div`
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
  `;
  const Background = styled.div``;
  const GradientMask = styled.div``;
  return (
    <div className="">
         
        <GradientMask className=" absolute h-screen bg-cover max-w-full z-50" />
        <Image
          src={bgImage}
          alt={'backgroundImage'}
          layout="fill"
          quality={40}
          className="object-center blur-3xl relative z-0"
        />
             {/* <Image src={bgImage} alt={'backgroundImage'} className="absolute  object-center w-full  h-screen"/> relative max-w-full bg-cover*/}
      <Navbar links={links} />
      {children}
      <Footer texts={texts} />
    </div>
  );
};
export default Layout;
