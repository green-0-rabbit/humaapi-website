import { Box } from '@mantine/core';
import LandingPage from 'src/components/sections/home/landing-page';
import OursService from '../components/sections/home/our-services';
import DomaineActivity from '../components/sections/home/domaine-activity';

export default function Home() {
  return (
    <Box className="w-full space-y-[72px]">
      <LandingPage />
      <OursService />
      <DomaineActivity />
    </Box>
  );
}
