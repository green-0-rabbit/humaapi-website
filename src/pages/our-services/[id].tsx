import { FC } from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import {
  IServicesOverview,
  IServiceCard,
  OurServicesService
} from 'src/services/our-service-service';

import {
  INavigation,
  INetwork,
  navigationService
} from 'src/services/navigation-service';
import IdContent from 'src/components/sections/our-services/sub-component/id-content';
import Layout from 'src/layouts/layout';

interface IIdOutService {
  navigationData: INavigation[];
  serviceCardData: IServiceCard[];
  serviceData: IServicesOverview;
  networkData: INetwork[];
}

const IdOutService: FC<IIdOutService> = (props) => {
  const { serviceData, navigationData, serviceCardData, networkData } = props;
  const [parentData] = navigationData.filter((val) => val.footerTitle === null);
  return (
    <Layout
      pageTitle={serviceData.title}
      navigationData={navigationData}
      serviceData={serviceCardData}
      networkData={networkData}
      pageSlug={parentData.navigationLink}>
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

  const networkData = await navigationService.getNetwork();

  const serviceCardData = await OurServicesService.getServiceCard();

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
