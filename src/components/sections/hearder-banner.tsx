import { Box } from '@mantine/core';
import Image from 'next/image';
import { FC, ReactNode } from 'react';
import bgImage from '../../../public/assets/img/gradientcircleglassmorphism.png';

interface IHearderBanner {
  children?: ReactNode;
  size?:string
}
const HearderBanner: FC<IHearderBanner> = (props) => {
  const {children,size} = props
  return (
    <Box className={`${size ? `${size}`:'h-screen'} bg-gradient-to-b from-[#fff9f9]`} >
      <Image
        src={bgImage}
        alt={'backgroundImage'}
        layout="fill"
        quality={40}
        className="object-center blur-[120px]"
      />
      {children}
    </Box>
  );
};

export default HearderBanner;
