import { Box } from '@mantine/core';
import { GetStaticProps } from 'next';
import { FC } from 'react';
import CookiePolicyContent from 'src/components/sections/cookie-policy/cookie-content';
import { IDataCookiePolicy, cookieService } from 'src/services/cookie-service';

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
}

const Cookie: FC<ICookiePage> = ({ ...props }) => {
  const {
    cookiePolicyContent,
    pageTitle,
    navigationData,
    serviceCardData,
    networkData
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
          // cookiePolicyContent={newcookiePolicyContent}
        />
      </Box>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  // const cookiesData = await cookieService.getCookies();
  const cookiePolicyContent = await cookieService.get();
  // const pageTitle = await cookieService.getTitle();
  const serviceCardData = await OurServicesService.getServiceCard();
  const navigationData = await navigationService.getAll();
  const networkData = await navigationService.getNetwork();
  return {
    props: {
      // cookiesData,
      cookiePolicyContent,
      serviceCardData,
      navigationData,
      networkData
    }
  };
};

export default Cookie;
