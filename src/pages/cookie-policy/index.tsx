import { Box } from '@mantine/core';
import { GetStaticProps } from 'next';
import { FC } from 'react';
import CookiePolicyContent from 'src/components/sections/cookie-policy/cookie-content';
import {
  cookieService,
  ICookieManagementData,
  IDataCookiePolicy
} from 'src/services/cookie-service';

interface ICookie {
  cookiesData: ICookieManagementData;
  cookiePolicyContent: IDataCookiePolicy[];
}

const Cookie: FC<ICookie> = ({ ...props }) => {
  const { cookiesData, cookiePolicyContent } = props;
  return (
    <Box className="mx-auto">
      <CookiePolicyContent
        cookiesData={cookiesData}
        cookiePolicyContent={cookiePolicyContent[0]}
      />
    </Box>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const cookiesData = await cookieService.getCookies();
  const cookiePolicyContent = await cookieService.get();
  return {
    props: {
      cookiesData,
      cookiePolicyContent
    }
  };
};

export default Cookie;
