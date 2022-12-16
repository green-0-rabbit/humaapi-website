import { Box } from '@mantine/core';
import styled from '@emotion/styled';
import FirstDescription from './first-description';
import HeadCookie from './header-cookies';
import SecondDescription from './second-description';
import TableDescription from './table-description';
import ThirdDescription from './third-description';
import FourthDescription from './fourth-description';

const Container = styled.div``;

const CookiePolicyContent = () => (
  <Box>
    <HeadCookie />
    <Container className="space-y-20 ">
      <FirstDescription />
      <SecondDescription />
      <ThirdDescription />
      <FourthDescription />
      <TableDescription />
    </Container>
  </Box>
);
export default CookiePolicyContent;
