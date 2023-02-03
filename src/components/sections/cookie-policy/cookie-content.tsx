import { Box } from '@mantine/core';
import styled from '@emotion/styled';
import {
  ICookieManagementData,
  IDataCookiePolicy
} from 'src/services/cookie-service';
import { FC } from 'react';
import HeadCookie from './header-cookies';
import TableDescription from './table-description';
import DescriptionField from './description-field';

interface ICookiePolicyContent {
  cookiesData: ICookieManagementData[];
  cookiePolicyContent: IDataCookiePolicy;
}
const Container = styled.div``;

const CookiePolicyContent: FC<ICookiePolicyContent> = ({ ...props }) => {
  const { cookiesData, cookiePolicyContent } = props;
  const filterCookiePolicyContent = { ...cookiePolicyContent };
  return (
    <Box>
      <HeadCookie
        title={filterCookiePolicyContent.title}
        content={filterCookiePolicyContent.content}
      />
      <Container className="space-y-20 ">
        <DescriptionField
          content={filterCookiePolicyContent.descriptionField}
        />
        <TableDescription cookiesData={cookiesData} />
      </Container>
    </Box>
  );
};
export default CookiePolicyContent;
