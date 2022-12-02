import { useRoutes } from 'react-router-dom';
import { Box, Drawer } from '@mantine/core';
import LandingPage from 'src/components/sections/home/landing-page';
import styled from '@emotion/styled';
const ContainOursService = styled.div``;
const ContainDomaineActivity = styled.div``;
import OursService from '../sections/home/our-services';
import DomaineActivity from '../sections/home/domaine-activity';
import Card from '../elements/brand-card';
const AppRouting = () => {
  const route = useRoutes([
    {
      path: '/',
      element: (
        <Box className="w-full space-y-[3rem]">
          <LandingPage />
          <ContainOursService>
            <OursService />
          </ContainOursService>
          <ContainDomaineActivity>
            <DomaineActivity />
          </ContainDomaineActivity>
        </Box>
      ),
      children: [
        {
          path: 'drawer-brand',
          element: (
            <Drawer
              opened
              onClose={function (): void {
                console.log('toto');
              }}>
              {' '}
              <Card children={'undefined'} />
            </Drawer>
          )
        }
      ]
    }
  ]);
  return route;
};

export default AppRouting;
