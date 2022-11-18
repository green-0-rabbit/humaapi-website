import { Box } from '@mantine/core';
import Image from 'next/image';
import { FC, ReactNode } from 'react';
import bgImage from '../../../public/assets/img/gradientcircleglassmorphism.png';

interface IHearderBanner {
  children?: ReactNode;
}
const HearderBanner: FC<IHearderBanner> = ({ children }) => {
  return (
    <Box className="h-screen bg-gradient-to-b from-[#fff9f9]">
      <Image
        src={bgImage}
        alt={'backgroundImage'}
        layout="fill"
        quality={40}
        className="object-center blur-[120px]"
      />
      <Box className='flex justify-center items-center'>{children}</Box>
    </Box>
  );
};

export default HearderBanner;
