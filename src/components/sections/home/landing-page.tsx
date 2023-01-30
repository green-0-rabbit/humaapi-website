import styled from '@emotion/styled';
import { Box } from '@mantine/core';
import { FC } from 'react';
import DataService from 'src/components/content/content-data';
import { IDataLandingPage } from 'src/services/home-service';
import Description from '../../modules/description';
import SearchBar from '../../modules/search-bar';

interface ILandingPage {
  landingData: IDataLandingPage;
}
const ContentImage = styled.div``;
const HeaderBannerContain = styled.div``;
const Contain = styled.div``;
const landingIllustration = DataService.serviceSvgIllustration[4].img;

const LandingPage: FC<ILandingPage> = (props) => {
  const { landingData } = props;
  return (
    <Box>
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
              title={landingData.titleLanding}
              content={landingData.contentLanding}
              space={12}
            />
            <Box className="mt-4">
              <SearchBar />
            </Box>
          </Box>
          <ContentImage className="hidden md:block">
            {landingIllustration}
          </ContentImage>
        </Contain>
      </HeaderBannerContain>
    </Box>
  );
};
export default LandingPage;
