import { Box } from '@mantine/core';
import { GetStaticProps } from 'next';
import { FC } from 'react';
import CookiePolicyContent from 'src/components/sections/cookie-policy/cookie-content';
import {
  cookieService,
  ICookieManagementData,
  IDataCookiePolicy
} from 'src/services/cookie-service';

import Navbar from 'src/components/sections/navbar';
import Footer from 'src/components/sections/footer';
import { parseFooter } from 'src/services/navigation-service/helper-function';
import {
  IDataNavigationFooter,
  INavigationHeaderData,
  navigationService
} from 'src/services/navigation-service';

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
  const itemFooter = parseFooter(navigationFooterData);
  return (
    <>
      <Navbar itemNavLink={navigationHeaderData} />
      <Box className="mx-auto">
        <CookiePolicyContent
          cookiesData={cookiesData}
          cookiePolicyContent={cookiePolicyContent[0]}
        />
      </Box>
      <Footer itemFooter={itemFooter} />
    </>
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
