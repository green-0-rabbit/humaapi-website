import { Box, Button } from '@mantine/core';
import LandingPage from 'src/components/sections/landing-page';
import OursService from '../components/sections/ours-service';
import DomaineActivity from '../components/sections/domaine-activity';
import ScrollTop from '../components/modules/scroll-to-up';
import styled from '@emotion/styled';

const ContainOursService = styled.div``;
const ContainDomaineActivity = styled.div``;

export default function Home() {
  return (
    <Box className="w-full space-y-[3rem] ">
      <LandingPage />
      <ContainOursService>
        <OursService />
      </ContainOursService>
      <ContainDomaineActivity>
        <DomaineActivity />
      </ContainDomaineActivity>
      <ScrollTop />
    </Box>
  );
}
