import { Box } from '@mantine/core';
import LandingPage from 'src/components/sections/home-section/landing-page';
import OursService from '../components/sections/home-section/ours-service';
import DomaineActivity from '../components/sections/home-section/domaine-activity';
import styled from '@emotion/styled';

const ContainOursService = styled.div``;
const ContainDomaineActivity = styled.div``;

export default function Home() {
  return (
    <Box className="w-full space-y-[3rem]">
      <LandingPage />
      <ContainOursService>
        <OursService />
      </ContainOursService>
      <ContainDomaineActivity>
        <DomaineActivity />
      </ContainDomaineActivity>
      
    </Box>
  );
}
