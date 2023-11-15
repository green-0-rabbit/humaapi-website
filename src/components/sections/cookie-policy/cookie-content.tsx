import { Box } from '@mantine/core';
import styled from '@emotion/styled';
import { ICookie, IListCookie } from 'src/services/cookie-service';
import { FC } from 'react';
import HeadCookie from './header-cookies';
import TableDescription from './table-description';
import DescriptionField from './description-field';

interface ICookiePolicyContent {
  cookiePolicyContent: ICookie;
  cookieList: IListCookie[];
}
const Container = styled.div``;

const CookiePolicyContent: FC<ICookiePolicyContent> = ({ ...props }) => {
  const { cookiePolicyContent, cookieList } = props;

  return (
    <Box>
      <HeadCookie
        title={cookiePolicyContent.title}
        description={cookiePolicyContent.description}
        subTitle={cookiePolicyContent.subTitle}
      />
      <Container className="space-y-20 ">
        <DescriptionField content={cookiePolicyContent.cookiePolicy} />
        <TableDescription cookieList={cookieList} />
      </Container>
    </Box>
  );
};
export default CookiePolicyContent;
