import { Box } from '@mantine/core';
import LandingPage from 'src/components/sections/home/landing-page';
import { GetStaticProps } from 'next';
import {
  HomeService,
  IDataDomainNodeService,
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
  IDataNavigation,
  IDataNetwork,
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
  navigationData: IDataNavigation;
  pageTitle: string;
  networkData: IDataNetwork;
  domaineNodeData: IDataDomainNodeService;
}
const Home: FC<Ihome> = ({ ...props }) => {
  const {
    serviceData,
    domaineData,
    landingData,
    serviceCardData,
    navigationData,
    pageTitle,
    networkData,
    domaineNodeData
  } = props;
  const [ourServiceNavigation] = navigationData.filter(
    (val) => val.footerTitle === null
  );
  console.log({ navigationData });

  return (
    <Layout
      navigationData={navigationData}
      pageTitle={pageTitle}
      serviceData={serviceCardData}
      networkData={networkData}>
      <Box className="w-full space-y-[72px]">
        <LandingPage landingData={landingData} />
        <OursService
          serviceData={serviceData}
          serviceCardData={serviceCardData}
          parentUrl={ourServiceNavigation.navigationLink}
        />
        <DomaineActivity
          domaineData={domaineData}
          domaineNodeData={domaineNodeData}
        />
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
  const networkData = await navigationService.getNetwork();
  const domaineNodeData = await HomeService.getDomaineNode();
  console.log(navigationData);

  return {
    props: {
      serviceData,
      domaineData,
      landingData,
      serviceCardData,
      navigationData,
      pageTitle,
      networkData,
      domaineNodeData
    }
  };
};
