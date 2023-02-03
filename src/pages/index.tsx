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
import {
  INavigationFooterData,
  INavigationHeaderData,
  navigationService
} from 'src/services/navigation-service/navigation-service';
import Layout from 'src/layouts/layout';
import OursService from '../components/sections/home/our-services';
import DomaineActivity from '../components/sections/home/domaine-activity';

interface Ihome {
  domaineData: IDataDomaineActivity[];
  landingData: IDataLandingPage[];
  serviceData: IDataOurService[];
  serviceCardData: IDataServiceCard[];
  navigationHeaderData: INavigationHeaderData[];
  navigationFooterData: INavigationFooterData[];
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

  return (
    <Layout
      navigationHeaderData={navigationHeaderData}
      navigationFooterData={navigationFooterData}>
      <Box className="w-full space-y-[72px]">
        <LandingPage landingData={landingData[0]} />
        <OursService
          serviceData={serviceData[0]}
          serviceCardData={serviceCardData}
        />
        <DomaineActivity domaineData={domaineData[0]} />
      </Box>
    </Layout>
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
