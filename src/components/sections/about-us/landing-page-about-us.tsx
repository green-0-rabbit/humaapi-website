/* eslint-disable tailwindcss/no-contradicting-classname */
import styled from '@emotion/styled';
import Description from 'src/components/modules/description';
import Image from 'next/image';
import { Box, createStyles, Skeleton } from '@mantine/core';
import { ILandingAboutUsData } from 'src/services/about-us-service';
import { FC, useState } from 'react';
import AboutusImage from '../../../public/assets/img/pexels-diva-plavalaguna-6147029.jpg';

const useStyles = createStyles((theme) => ({
  root: {
    boxShadow:
      theme.colorScheme === 'dark'
        ? '1px 1px 38px #05050581'
        : '1px 1px 40px #6d6d6d9d'
  }
}));

interface ILandingAboutUs {
  landingData: ILandingAboutUsData;
}
const Contain = styled.div``;
const Section = styled.section``;
const ImageContain = styled.div``;
const HeaderBannerContain = styled.div``;

const LandingAboutUs: FC<ILandingAboutUs> = (props) => {
  const [imgsLoaded, setImgsLoaded] = useState(false);
  const { landingData } = props;
  const { classes } = useStyles();

  return (
    <HeaderBannerContain className="flex h-screen justify-center p-5">
      <Section className="flex flex-col justify-center xs:text-center md:text-left">
        <Contain className="flex flex-col items-center justify-center md:flex-row">
          <Box className="flex w-[85%] flex-col justify-center md:mr-14 md:max-w-xs">
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
          <ImageContain className="relative order-first mb-12 mt-20 flex justify-center md:order-last md:m-0">
            {/* {imgsLoaded ? null : (
              <Skeleton height={200} circle mb="xl" visible={!imgsLoaded} />
            )} */}
            <Image
              // {`https://1qd42xii.directus.app/assets/${landingData.aboutImg.id}`}
              // style={imgsLoaded ? {} : { display: 'none' }}
              src={AboutusImage}
              alt="AboutusImage"
              className={`h-[313px] w-[279px] rounded-[50px]
             object-cover object-center ${classes.root}`}
              // onLoad={() =>
              //   setTimeout(() => {
              //     setImgsLoaded(true);
              //   }, 3000)
              // }
            />
          </ImageContain>
        </Contain>
      </Section>
    </HeaderBannerContain>
  );
};

export default LandingAboutUs;
