import styled from '@emotion/styled';
import { Box } from '@mantine/core';
import { FC } from 'react';
import IllustrationLandingPage from 'src/components/elements/svg/icons/illustration-landing-page';
import Description from '../../modules/description';
import SearchBar from '../../modules/search-bar';

const ContentImage = styled.div``;
const HeaderBannerContain = styled.div``;
const Contain = styled.div``;

const LandingPage: FC = (props) => (
  <Box {...props}>
    <HeaderBannerContain className="h-screen flex justify-center p-5">
      <Contain className=" text-left flex space-x-5 items-center lg:max-w-[800px] md:mx-auto">
        <Box className="mx-auto space-y-8 p-2 md:p-0">
          <Description
            sx={{
              fontFamily: 'Ubuntu-Bold',
              fontWeight: 800,
              lineHeight: '40px'
            }}
            size={40}
            title=" Make your app idea a reality with us."
            content=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut voluptatibus fuga, dolores quisquam quibusdam rem!"
            space={12}
          />
          <Box className="mt-4">
            <SearchBar />
          </Box>
        </Box>
        <ContentImage className="hidden md:block">
          <IllustrationLandingPage />
        </ContentImage>
      </Contain>
    </HeaderBannerContain>
  </Box>
);
export default LandingPage;
