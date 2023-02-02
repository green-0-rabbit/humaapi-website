import { Box } from '@mantine/core';
import LandingPage from 'src/components/sections/home/landing-page';
import { GetStaticProps } from 'next';
import {
  HomeService,
  IDataDomaineActivity,
  IDataLandingPage,
  IDataOurService
} from 'src/services/home-service';
import { FC } from 'react';
import {
  IDataServiceCard,
  OurServicesService
} from 'src/services/our-service-service';
import Navbar from 'src/components/sections/navbar';
import Footer from 'src/components/sections/footer';
import {
  IDataNavigationFooter,
  INavigationHeaderData,
  navigationService
} from 'src/services/navigation-service/navigation-service';
import { parseFooter } from 'src/services/navigation-service/helper-function';
import OursService from '../components/sections/home/our-services';
import DomaineActivity from '../components/sections/home/domaine-activity';

interface Ihome {
  domaineData: IDataDomaineActivity[];
  landingData: IDataLandingPage[];
  serviceData: IDataOurService[];
  serviceCardData: IDataServiceCard[];
  navigationHeaderData: INavigationHeaderData[];
  navigationFooterData: IDataNavigationFooter[];
}
const Home: FC<Ihome> = ({ ...props }) => {
  const {
    serviceData,
    domaineData,
    landingData,
    serviceCardData,
    navigationHeaderData,
    navigationFooterData
  } = props;
  const itemFooter = parseFooter(navigationFooterData);

  return (
    <>
      <Navbar itemNavLink={navigationHeaderData} />
      <Box className="w-full space-y-[72px]">
        <LandingPage landingData={landingData[0]} />
        <OursService
          serviceData={serviceData[0]}
          serviceCardData={serviceCardData}
        />
        <DomaineActivity domaineData={domaineData[0]} />
      </Box>
      <Footer itemFooter={itemFooter} />
    </>
  );
};
export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const serviceData = await HomeService.getService();
  const domaineData = await HomeService.getDomaine();
  const landingData = await HomeService.getLanding();
  const serviceCardData = await OurServicesService.getServiceCard();
  const navigationHeaderData = await navigationService.getHeader();
  const navigationFooterData = await navigationService.getFooter();

  return {
    props: {
      serviceData,
      domaineData,
      landingData,
      serviceCardData,
      navigationHeaderData,
      navigationFooterData
    }
  };
};
