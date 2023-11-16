import { Box } from '@mantine/core';
import LandingPage from 'src/components/sections/home/landing-page';
import { GetStaticProps } from 'next';
import {
  IDomaineNodeType,
  HomeService,
  IDomaineActivity,
  ILandingPage,
  IOurService,
  IPageData
} from 'src/services/home-service';
import { FC } from 'react';
import {
  IServiceCard,
  OurServicesService
} from 'src/services/our-service-service';
import {
  INavigation,
  INetwork,
  navigationService
} from 'src/services/navigation-service/navigation-service';
import Layout from 'src/layouts/layout';
import OursService from '../components/sections/home/our-services';
import DomaineActivity from '../components/sections/home/domaine-activity';

interface Ihome {
  domaineData: IDomaineActivity;
  landingData: ILandingPage;
  serviceData: IOurService;
  serviceCardData: IServiceCard[];
  navigationData: INavigation[];
  pageData: IPageData;
  networkData: INetwork[];
  domaineNodeData: IDomaineNodeType[];
}
const Home: FC<Ihome> = ({ ...props }) => {
  const {
    serviceData,
    domaineData,
    landingData,
    serviceCardData,
    navigationData,
    pageData,
    networkData,
    domaineNodeData
  } = props;
  const [ourServiceNavigation] = navigationData.filter(
    (val) => val.footerTitle === null
  );

  return (
    <Layout
      navigationData={navigationData}
      pageTitle={pageData.title}
      pageSlug={pageData.slug}
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
  const pageData = await HomeService.getPageData();
  const serviceCardData = await OurServicesService.getServiceCard();
  const navigationData = await navigationService.getAll();
  const networkData = await navigationService.getNetwork();
  const domaineNodeData = await HomeService.getDomaineNode();

  return {
    props: {
      serviceData,
      domaineData,
      landingData,
      serviceCardData,
      navigationData,
      pageData,
      networkData,
      domaineNodeData
    }
  };
};
