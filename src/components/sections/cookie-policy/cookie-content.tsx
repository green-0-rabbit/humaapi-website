import { Box } from '@mantine/core';
import styled from '@emotion/styled';
import {
  ICookieManagementData,
  IDataCookiePolicy
} from 'src/services/cookie-service';
import { FC } from 'react';
import HeadCookie from './header-cookies';
import SecondDescription from './second-description';
import TableDescription from './table-description';
import ThirdDescription from './third-description';
import FourthDescription from './fourth-description';
import DescriptionField from './description-field';

interface ICookiePolicyContent {
  cookiesData: ICookieManagementData;
  cookiePolicyContent: IDataCookiePolicy;
}
const Container = styled.div``;

const CookiePolicyContent: FC<ICookiePolicyContent> = ({ ...props }) => {
  const { cookiesData, cookiePolicyContent } = props;
  const filter = { ...cookiePolicyContent };
  return (
    <Box>
      <HeadCookie title={filter.title} content={filter.content} />
      <Container className="space-y-20 ">
        <DescriptionField content={filter.descriptionField} />
        <TableDescription cookiesData={cookiesData} />
      </Container>
    </Box>
  );
};
export default CookiePolicyContent;
