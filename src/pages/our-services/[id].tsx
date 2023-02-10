import { FC } from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import {
  IDataDetailsService,
  OurServicesService
} from 'src/services/our-service-service';

import {
  INavigationFooterData,
  INavigationHeaderData,
  navigationService
} from 'src/services/navigation-service';
import Layout from 'src/layouts/layout';
import IdContent from 'src/components/sections/our-services/sub-component/id-content';

interface IIdOutService {
  serviceData: IDataDetailsService;
  navigationHeaderData: INavigationHeaderData[];
  navigationFooterData: INavigationFooterData[];
}

const IdOutService: FC<IIdOutService> = (props) => {
  const { serviceData, navigationHeaderData, navigationFooterData } = props;

  return (
    <Layout
      pageTitle={serviceData.pageTitle}
      navigationHeaderData={navigationHeaderData}
      navigationFooterData={navigationFooterData}>
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
  const serviceData = await OurServicesService.getByLink(id);
  const navigationHeaderData = await navigationService.getHeader();
  const navigationFooterData = await navigationService.getFooter();
  if (!serviceData) {
    throw new Error(
      `page ${id} was not found, please check the backend request`
    );
  }
  return {
    props: {
      serviceData,
      navigationHeaderData,
      navigationFooterData
    }
  };
};
export default IdOutService;
