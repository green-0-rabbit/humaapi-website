import { Box } from '@mantine/core';
import { GetStaticProps } from 'next';
import { FC } from 'react';
import CardServices from 'src/components/sections/our-services/card-services';
import HeadOurServices from 'src/components/sections/our-services/header-our-services';
import {
  IServiceCard,
  IServiceData,
  OurServicesService
} from 'src/services/our-service-service';
import {
  INavigation,
  INetwork,
  navigationService
} from 'src/services/navigation-service';
import Layout from 'src/layouts/layout';
import path from 'path';

interface IOurServices {
  serviceCardData: IServiceCard[];
  pageData: IServiceData;
  navigationData: INavigation[];
  parentUrl: string;
  networkData: INetwork[];
}
const OurServices: FC<IOurServices> = ({ ...props }) => {
  const { serviceCardData, pageData, navigationData, networkData } = props;
  const [ourServiceNavigation] = navigationData.filter(
    (val) => val.footerTitle === null
  );
  return (
    <Layout
      pageTitle={pageData.title}
      navigationData={navigationData}
      serviceData={serviceCardData}
      networkData={networkData}>
      <Box className="w-full">
        <HeadOurServices pageData={pageData} />
        <CardServices
          servicesData={serviceCardData}
          parentUrl={ourServiceNavigation.navigationLink}
        />
      </Box>
    </Layout>
  );
};
export const getStaticProps: GetStaticProps = async () => {
  const fileName = path.basename(__filename, '.js');
  const serviceCardData = await OurServicesService.getServiceCard();
  const navigationData = await navigationService.getAll();
  const pageData = await OurServicesService.getServiceData(fileName);
  const networkData = await navigationService.getNetwork();

  return {
    props: {
      serviceCardData,
      navigationData,
      pageData,
      networkData
    }
  };
};
export default OurServices;
