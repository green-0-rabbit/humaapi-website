import styled from '@emotion/styled';
import { Box } from '@mantine/core';
import { FC } from 'react';
import Image from 'next/image';
import { ILandingPage } from 'src/services/home-service';
import Description from '../../modules/description';
import SearchBar from '../../modules/search-bar';

interface IDataLandingPage {
  landingData: ILandingPage;
}
const ContentImage = styled.div``;
const HeaderBannerContain = styled.div``;
const Contain = styled.div``;

const LandingPage: FC<IDataLandingPage> = (props) => {
  const { landingData } = props;
  return (
    <Box>
      <HeaderBannerContain className="flex h-screen justify-center p-5">
        <Contain className=" flex items-center space-x-5 text-left md:mx-auto lg:max-w-[800px]">
          <Box className="mx-auto space-y-8 p-2 md:p-0">
            <Description
              sx={{
                fontFamily: 'Ubuntu-Bold',
                fontWeight: 800,
                lineHeight: '40px'
              }}
              size={40}
              title={landingData.title}
              content={landingData.description}
              space={12}
            />
            <Box className="mt-4">
              <SearchBar />
            </Box>
          </Box>
          <ContentImage className="hidden md:block">
            <Image
              src={landingData.image}
              alt={landingData.imageName}
              className=" object-cover object-center"
              height={248}
              width={800}
            />
          </ContentImage>
        </Contain>
      </HeaderBannerContain>
    </Box>
  );
};
export default LandingPage;
