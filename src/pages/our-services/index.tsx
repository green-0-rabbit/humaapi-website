import { Box } from '@mantine/core';
import Design from 'src/components/sections/our-services-section/design';
import DevOps from 'src/components/sections/our-services-section/devops';
import MobileDev from 'src/components/sections/our-services-section/mobile-dev';
import TitleSection from 'src/components/sections/our-services-section/title-section';
import WebDev from 'src/components/sections/our-services-section/web-dev';

const OurServices = () => {
  return (
    <Box className="w-full space-y-[18rem] xs:space-y-[4rem] md:space-y-32">
        <TitleSection />
      <Box className="space-y-32 md:space-y-72">
      <MobileDev labelBtn={''} />
        <WebDev labelBtn={''} />
        <DevOps labelBtn={''} />
        <Design labelBtn={''} />
      </Box>
    </Box>
  );
};
export default OurServices;
