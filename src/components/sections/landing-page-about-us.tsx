/* eslint-disable tailwindcss/no-contradicting-classname */
import styled from '@emotion/styled';
import Description from 'src/components/modules/description';
import Image from 'next/image';
import { Box } from '@mantine/core';
import { IDataLandingAboutUs } from 'src/services/about-us-service';
import { FC } from 'react';
import AboutusImage from '../../../public/assets/img/pexels-diva-plavalaguna-6147029.jpg';

interface ILandingAboutUs {
  landingData: IDataLandingAboutUs;
}
const Contain = styled.div``;
const Section = styled.section``;
const ImageContain = styled.div``;
const HeaderBannerContain = styled.div``;

const LandingAboutUs: FC<ILandingAboutUs> = (props) => {
  const { landingData } = props;
  return (
    <HeaderBannerContain className="h-screen flex justify-center p-5">
      <Section className="flex flex-col justify-center xs:text-center md:text-left">
        <Contain className="flex flex-col justify-center items-center md:flex-row">
          <Box className="w-[85%] md:max-w-xs flex justify-center flex-col md:mr-14">
            <Description
              sx={{
                fontFamily: 'Ubuntu-Bold',
                fontWeight: 700,
                lineHeight: '36px'
              }}
              size={32}
              space={12}
              title={landingData.titleAboutUs}
              content={landingData.contentAboutUs}
            />
          </Box>
          <ImageContain className="flex justify-center relative mb-12 md:m-0 order-first md:order-last">
            <Image
              src={AboutusImage}
              alt="AboutusImage"
              className="object-cover object-center rounded-[50px]
              border-4 h-[313px] w-[279px] border-white shadow-lg shadow-[#eee]"
            />
          </ImageContain>
        </Contain>
      </Section>
    </HeaderBannerContain>
  );
};

export default LandingAboutUs;
