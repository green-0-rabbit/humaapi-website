import styled from '@emotion/styled';
import { FC } from 'react';
import HearderBanner from 'src/components/sections/hearder-banner';
import DataService from 'src/components/content/content-data';
import TheRenders from 'src/components/sections/our-services/sub-component/the-renders';
import Process from 'src/components/sections/our-services/sub-component/process';
import GetDetailData from 'src/components/features/getDetailData';
import { Box } from '@mantine/core';

interface ILandingPage {}
const IdOutService: FC<ILandingPage> = () => {
  const HearderBannerContain = styled.div``;
  const ContainService = styled.div``;
  const children = GetDetailData();
  return (
    <ContainService>
      <HearderBannerContain className="h-screen mt-[16%] sm:mt-0  grid place-items-center p-5 ">
        {children}
      </HearderBannerContain>
      <Box className="space-y-32">
        <TheRenders dataTheRenders={DataService.theRendersData} />
        <Process dataProcess={DataService.processData} />
      </Box>
    </ContainService>
  );
};
export default IdOutService;