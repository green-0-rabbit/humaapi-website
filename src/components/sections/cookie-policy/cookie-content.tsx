import { Box } from '@mantine/core';
import styled from '@emotion/styled';
import { IDataCookiePolicy } from 'src/services/cookie-service';
import { FC } from 'react';
import HeadCookie from './header-cookies';
import TableDescription from './table-description';
import DescriptionField from './description-field';

interface ICookiePolicyContent {
  // cookiesData: ICookieManagementData[];
  cookiePolicyContent: IDataCookiePolicy;
}
const Container = styled.div``;

const CookiePolicyContent: FC<ICookiePolicyContent> = ({ ...props }) => {
  const { cookiePolicyContent } = props;

  return (
    <Box>
      <HeadCookie
        title={cookiePolicyContent.title}
        description={cookiePolicyContent.description}
        subTitle={cookiePolicyContent.subTitle}
      />
      <Container className="space-y-20 ">
        <DescriptionField content={cookiePolicyContent.cookiePolicy} />
        {/* <TableDescription cookiesData={cookiesData} /> */}
      </Container>
    </Box>
  );
};
export default CookiePolicyContent;
