import styled from '@emotion/styled';
import { Box } from '@mantine/core';
import { FC } from 'react';
import IllustrationLandingPage from '../../elements/illustrations/logo-icon/illustration-landing-page';
import HearderBanner from './../hearder-banner';
import Description from '../../modules/description';
import Searchbar from '../../elements/search-bar';

interface ILandingPage {}

const Illustration = styled.div``;
const HearderBannerContain = styled.div``;
const Contain = styled.div``;
const ContainHeaderBanner = styled.div``;
const LandingPage: FC<ILandingPage> = () => {
  return (
    <ContainHeaderBanner>
      <HearderBanner>
        <HearderBannerContain className="h-screen  grid place-items-center p-5">
          <Contain className="grid grid-cols-1 mt-30 md:gap-10 text-left lg:max-w-[50rem] md:grid-cols-2 md:mx-14">
            <Box className="col-span-1 grid gap-8 p-2 md:p-0 md:gap-10 xs:col-span-2 md:col-span-1">
              <Description
                title={' Make your app idea a reality with us.'}
                content={
                  ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut voluptatibus fuga, dolores quisquam quibusdam rem!'
                }
                classe={
                  'text-[40px] description-title  font-extrabold leading-[3rem]'
                }
                space={4}
              />
              <Box className="mt-4">
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
  );
};
export default LandingPage;
