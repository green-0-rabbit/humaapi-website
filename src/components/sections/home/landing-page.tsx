import styled from '@emotion/styled';
import { Box } from '@mantine/core';
import { FC } from 'react';
import Description from '../../modules/description';
import IllustrationLandingPage from 'src/components/elements/svg/icons/illustration-landing-page';
import SearchBar from '../../modules/search-bar';

const Illustration = styled.div``;
const HearderBannerContain = styled.div``;
const Contain = styled.div``;

const LandingPage: FC = (props) => {
  return (
    <Box {...props}>
      <HearderBannerContain className="h-screen  grid place-items-center p-5 mt-10">
        <Contain className="grid grid-cols-1 mt-30 md:gap-10 text-left lg:max-w-[50rem] md:grid-cols-2 md:mx-14">
          <Box className="col-span-1 grid gap-8 p-2 md:p-0 md:gap-10 xs:col-span-2 md:col-span-1">
            <Description
              title=" Make your app idea a reality with us."
              content=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut voluptatibus fuga, dolores quisquam quibusdam rem!"
              classe="text-[40px] description-title  font-extrabold leading-[3rem]"
              space={4}
            />
            <Box className="mt-4">
              <SearchBar />
            </Box>
          </Box>
          <Illustration className="hidden md:block">
            <IllustrationLandingPage />
          </Illustration>
        </Contain>
      </HearderBannerContain>
    </Box>
  );
};
export default LandingPage;
