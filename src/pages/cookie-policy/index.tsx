import { Box } from '@mantine/core';
import { GetStaticProps } from 'next';
import { FC } from 'react';
import CookiePolicyContent from 'src/components/sections/cookie-policy/cookie-content';
import {
  cookieService,
  ICookieManagementData,
  IDataCookiePolicy
} from 'src/services/cookie-service';

import {
  IDataNavigationFooter,
  INavigationHeaderData,
  navigationService
} from 'src/services/navigation-service';
import Layout from 'src/layouts/layout';

interface ICookie {
  cookiesData: ICookieManagementData[];
  cookiePolicyContent: IDataCookiePolicy[];
  navigationFooterData: IDataNavigationFooter[];
  navigationHeaderData: INavigationHeaderData[];
}

const Cookie: FC<ICookie> = ({ ...props }) => {
  const {
    cookiesData,
    cookiePolicyContent,
    navigationHeaderData,
    navigationFooterData
  } = props;
  return (
    <Layout
      navigationHeaderData={navigationHeaderData}
      navigationFooterData={navigationFooterData}>
      <Box className="mx-auto">
        <CookiePolicyContent
          cookiesData={cookiesData}
          cookiePolicyContent={cookiePolicyContent[0]}
        />
      </Box>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const cookiesData = await cookieService.getCookies();
  const cookiePolicyContent = await cookieService.get();
  const navigationHeaderData = await navigationService.getHeader();
  const navigationFooterData = await navigationService.getFooter();
  return {
    props: {
      cookiesData,
      cookiePolicyContent,
      navigationHeaderData,
      navigationFooterData
    }
  };
};

export default Cookie;
