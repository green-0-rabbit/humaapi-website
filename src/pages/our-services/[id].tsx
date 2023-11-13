import { FC } from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import {
  IDataDetailsService,
  IDataServiceCard,
  IServiceData,
  OurServicesService
} from 'src/services/our-service-service';

import {
  IDataNavigation,
  IDataNetwork,
  navigationService
} from 'src/services/navigation-service';
import Layout from 'src/layouts/layout';
import IdContent from 'src/components/sections/our-services/sub-component/id-content';

interface IIdOutService {
  navigationData: IDataNavigation;
  serviceCardData: IDataServiceCard;
  serviceData: IDataDetailsService;
  networkData: IDataNetwork;
}

const IdOutService: FC<IIdOutService> = (props) => {
  const { serviceData, navigationData, serviceCardData, networkData } = props;

  return (
    <Layout
      pageTitle={serviceData.title}
      navigationData={navigationData}
      serviceData={serviceCardData}
      networkData={networkData}>
      <IdContent serviceData={serviceData} />
    </Layout>
  );
};
export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await OurServicesService.getPaths();
  if (paths) {
    return {
      paths,
      fallback: false
    };
  }

  throw new Error('getStaticPaths error');
};
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = params?.id as string;
  const navigationData = await navigationService.getAll();
  const serviceData = await OurServicesService.getByLink(id);
  const serviceCardData = await OurServicesService.getServiceCard();
  const networkData = await navigationService.getNetwork();

  if (!serviceData) {
    throw new Error(
      `page ${id} was not found, please check the backend request`
    );
  }
  return {
    props: {
      serviceData,
      serviceCardData,
      navigationData,
      networkData
    }
  };
};
export default IdOutService;
