import { Box } from '@mantine/core';
import { GetStaticProps } from 'next';
import { FC } from 'react';
import CookiePolicyContent from 'src/components/sections/cookie-policy/cookie-content';
import {
  IDataCookiePolicy,
  IDataListCookie,
  cookieService
} from 'src/services/cookie-service';

import {
  IDataNavigation,
  IDataNetwork,
  navigationService
} from 'src/services/navigation-service';
import Layout from 'src/layouts/layout';
import { IDataOurService } from 'src/services/home-service';
import {
  IDataServiceCard,
  OurServicesService
} from 'src/services/our-service-service';

interface ICookiePage {
  cookiePolicyContent: IDataCookiePolicy;
  pageTitle: string;
  serviceData: IDataOurService;
  serviceCardData: IDataServiceCard;
  navigationData: IDataNavigation;
  networkData: IDataNetwork;
  listCookie: IDataListCookie;
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
      networkData={networkData}>
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
