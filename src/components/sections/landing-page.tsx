import styled from '@emotion/styled';
import { Box, Button, Text } from '@mantine/core';
import { FC } from 'react';
import ButtonCustom from '../elements/button';
import IllustrationLandingPage from '../elements/illustrations/illustration-landing-page';
import bgImage from '../../public/assets/img/gradientcircleglassmorphism.png';
import Image from 'next/image';


interface ILandingPage {}

const Description = styled.div``;
const Illustration = styled.div``;

const Background = styled.div``;
const GradientMask = styled.div``;

const LandingPage: FC<ILandingPage> = () => {
  return (
    <Box className="w-4/5 flex flex-col md:flex-row">
      {/* <Image src={bgImage} alt={''} /> */}
      <Background className=" overflow-hidden text-center">
        <GradientMask className=" absolute bg-black top-0 left-0 w-full h-full opacity-60 z-20" />
        <Image
          src={bgImage}
          alt={'backgroundImage'}
          layout="fill"
          quality={40}
          className="object-cover z-0"
        />
      </Background>
      <Description>
        <Text>Make your app idea a reality with us.</Text>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
          voluptatibus fuga, dolores quisquam quibusdam rem!
        </Text>
        <ButtonCustom link={'/'} content={'Get in touch'} />
      </Description>
      <Illustration className="hidden md:block">
        <IllustrationLandingPage />
      </Illustration>
    </Box>
  );
};
export default LandingPage;
