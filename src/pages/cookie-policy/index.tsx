import { Box } from '@mantine/core';
import { GetStaticProps } from 'next';
import { FC } from 'react';
import CookiePolicyContent from 'src/components/sections/cookie-policy/cookie-content';
import {
  cookieService,
  ICookieManagementData,
  ICookieTitleData,
  IDataCookiePolicy
} from 'src/services/cookie-service';

import {
  INavigationFooterData,
  INavigationHeaderData,
  navigationService
} from 'src/services/navigation-service';
import Layout from 'src/layouts/layout';

interface ICookie {
  cookiesData: ICookieManagementData[];
  cookiePolicyContent: IDataCookiePolicy[];
  navigationFooterData: INavigationFooterData[];
  navigationHeaderData: INavigationHeaderData[];
  pageTitle: ICookieTitleData[];
}

const Cookie: FC<ICookie> = ({ ...props }) => {
  const {
    cookiesData,
    cookiePolicyContent,
    navigationHeaderData,
    navigationFooterData,
    pageTitle
  } = props;
  const title = { ...pageTitle[0] };
  return (
    <Layout
      pageTitle={title.pageTitle}
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
  const pageTitle = await cookieService.getTitle();
  const navigationHeaderData = await navigationService.getHeader();
  const navigationFooterData = await navigationService.getFooter();
  return {
    props: {
      cookiesData,
      cookiePolicyContent,
      navigationHeaderData,
      navigationFooterData,
      pageTitle
    }
  };
};

export default Cookie;
