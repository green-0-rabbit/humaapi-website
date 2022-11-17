import styled from '@emotion/styled';
import { Box, Button, Text } from '@mantine/core';
import { FC } from 'react';
import IllustrationLandingPage from '../elements/illustrations/illustration-landing-page';
import HearderBanner from './hearder-banner';
import Description from '../modules/description';
import Searchbar from '../elements/search-bar';
import OursService from './ours-service';
import DomaineActivity from './domaine-activity';

interface ILandingPage {}

const Illustration = styled.div``;
const HearderBannerContain = styled.div``;
const Contain = styled.div``;
const ContainHeaderBanner = styled.div``;
const ContainOursService = styled.div``;
const ContainDomaineActivity = styled.div``;

const LandingPage: FC<ILandingPage> = () => {
  return (
    <Box className='space-y-[8rem]'>
      <ContainHeaderBanner>
        <HearderBanner>
          <HearderBannerContain className="h-screen grid place-items-center">
            <Contain className="grid grid-cols-1 mt-10 md:gap-10 text-center md:text-left lg:max-w-[50rem] md:grid-cols-2 md:m-20">
              <Box className="col-span-1 grid gap-8 md:gap-10 xs:col-span-2 md:col-span-1">
                <Description
                  title={' Make your app idea a reality with us.'}
                  content={' Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut voluptatibus fuga, dolores quisquam quibusdam rem!'}
                  classe={'text-[40px] description-title  font-extrabold leading-[3rem]'} space={4}                />
                <Box className="mx-5 my-2 md:m-0">
                  <Searchbar />
                </Box>
              </Box>
              <Illustration className="hidden md:block">
                <IllustrationLandingPage />
              </Illustration>
            </Contain>
          </HearderBannerContain>
        </HearderBanner>
      </ContainHeaderBanner>
      <ContainOursService>
      <OursService />
       
      </ContainOursService>
      <ContainDomaineActivity>
      <DomaineActivity />
      </ContainDomaineActivity>
    </Box>
  );
};
export default LandingPage;
