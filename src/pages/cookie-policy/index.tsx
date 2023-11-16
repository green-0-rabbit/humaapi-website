import { Box } from '@mantine/core';
import { GetStaticProps } from 'next';
import { FC } from 'react';
import CookiePolicyContent from 'src/components/sections/cookie-policy/cookie-content';
import {
  ICookie,
  IListCookie,
  cookieService
} from 'src/services/cookie-service';

import {
  INavigation,
  INetwork,
  navigationService
} from 'src/services/navigation-service';
import Layout from 'src/layouts/layout';
import { IOurService } from 'src/services/home-service';
import {
  IServiceCard,
  OurServicesService
} from 'src/services/our-service-service';

interface ICookiePage {
  cookiePolicyContent: ICookie;
  pageTitle: string;
  serviceData: IOurService;
  serviceCardData: IServiceCard[];
  navigationData: INavigation[];
  networkData: INetwork[];
  listCookie: IListCookie[];
}

const Cookie: FC<ICookiePage> = ({ ...props }) => {
  const {
    cookiePolicyContent,
    navigationData,
    serviceCardData,
    networkData,
    listCookie
  } = props;
  return (
    <Layout
      navigationData={navigationData}
      pageTitle={cookiePolicyContent.title}
      serviceData={serviceCardData}
      networkData={networkData}
      pageSlug={cookiePolicyContent.slug}>
      <Box className="mx-auto">
        <CookiePolicyContent
          cookiePolicyContent={cookiePolicyContent}
          cookieList={listCookie}
        />
      </Box>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const cookiePolicyContent = await cookieService.get();
  const serviceCardData = await OurServicesService.getServiceCard();
  const navigationData = await navigationService.getAll();
  const networkData = await navigationService.getNetwork();
  const listCookie = await cookieService.getList();

  return {
    props: {
      cookiePolicyContent,
      serviceCardData,
      navigationData,
      networkData,
      listCookie
    }
  };
};

export default Cookie;
