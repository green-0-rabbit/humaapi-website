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
  INavigation,
  navigationService
} from 'src/services/navigation-service/navigation-service';
import Layout from 'src/layouts/layout';
import OursService from '../components/sections/home/our-services';
import DomaineActivity from '../components/sections/home/domaine-activity';

interface Ihome {
  domaineData: IDataDomaineActivity;
  landingData: IDataLandingPage;
  serviceData: IDataOurService;
  serviceCardData: IDataServiceCard;
  navigationData: INavigation[];
  pageTitle: string;
}
const Home: FC<Ihome> = ({ ...props }) => {
  const {
    serviceData,
    domaineData,
    landingData,
    serviceCardData,
    navigationData,
    pageTitle
  } = props;

  return (
    <Layout
      navigationData={navigationData}
      pageTitle={pageTitle}
      serviceData={serviceCardData}>
      <Box className="w-full space-y-[72px]">
        <LandingPage landingData={landingData} />
        <OursService
          serviceData={serviceData}
          serviceCardData={serviceCardData}
        />
        <DomaineActivity domaineData={domaineData} />
      </Box>
    </Layout>
  );
};
export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const serviceData = await HomeService.getService();
  const domaineData = await HomeService.getDomaine();
  const landingData = await HomeService.getLanding();
  const pageTitle = await HomeService.getPageTitle();
  const serviceCardData = await OurServicesService.getServiceCard();
  const navigationData = await navigationService.getAll();
  return {
    props: {
      serviceData,
      domaineData,
      landingData,
      serviceCardData,
      navigationData,
      pageTitle
    }
  };
};
