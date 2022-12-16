import { Box } from '@mantine/core';
import Design from 'src/components/sections/our-services/design';
import DevOps from 'src/components/sections/our-services/devops';
import HeadOurServices from 'src/components/sections/our-services/header-our-services';
import MobileDev from 'src/components/sections/our-services/mobile-dev';
import WebDev from 'src/components/sections/our-services/web-dev';

const OurServices = () => {
  return (
    <Box className="w-full">
      <HeadOurServices />
      <Box className="space-y-32 md:space-y-72">
        <MobileDev />
        <WebDev />
        <DevOps />
        <Design />
      </Box>
    </Box>
  );
};
export default OurServices;
