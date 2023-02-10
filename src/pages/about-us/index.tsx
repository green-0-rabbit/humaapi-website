import styled from '@emotion/styled';
import Description from 'src/components/modules/description';
import LandingAboutUs from 'src/components/sections/landing-page-about-us';
import { Box, createStyles, Text } from '@mantine/core';
import DataService from 'src/components/content/content-data';
import { GetStaticProps } from 'next';
import {
  aboutUsService,
  ILandingAboutUsData,
  IDataOurTeam
} from 'src/services/about-us-service';
import { FC } from 'react';
import {
  INavigationFooterData,
  INavigationHeaderData,
  navigationService
} from 'src/services/navigation-service';
import Layout from 'src/layouts/layout';
import { IDataTitle } from 'src/services/home-service';

interface IAboutUs {
  landingData: ILandingAboutUsData[];
  teamData: IDataOurTeam[];
  navigationHeaderData: INavigationHeaderData[];
  navigationFooterData: INavigationFooterData[];
  pageTitle: IDataTitle[];
}
const useStyles = createStyles((theme) => ({
  nameColor: { color: theme.colorScheme === 'dark' ? 'white' : '#2b2b2b' },
  roleColor: { color: theme.colorScheme === 'dark' ? '#afaaaa' : '#6B7280' }
}));

const ContainService = styled.div``;
const Title = styled.div``;
const Icon = styled.div``;
const ContainDescription = styled.div``;
const ContainCards = styled.div``;
const Container = styled.div``;
const Ourteam = styled.div``;
const AboutUs: FC<IAboutUs> = ({ ...props }) => {
  const {
    landingData,
    teamData,
    navigationHeaderData,
    navigationFooterData,
    pageTitle
  } = props;
  const { classes } = useStyles();
  const [filterTeamData] = teamData;
  const [title] = pageTitle;
  const [newLandingData] = landingData;
  return (
    <Layout
      pageTitle={title.pageTitle}
      navigationHeaderData={navigationHeaderData}
      navigationFooterData={navigationFooterData}>
      <ContainService>
        <LandingAboutUs landingData={newLandingData} />

        <Ourteam className="mx-4">
          <ContainDescription>
            <Title className="text-center">
              <Description
                title={filterTeamData.titleTeam}
                sx={{
                  fontFamily: 'Ubuntu-Bold',
                  fontWeight: 700,
                  lineHeight: '36px'
                }}
                size={24}
              />
            </Title>
          </ContainDescription>
          <ContainCards className="mt-12 grid place-items-center ">
            <Box
              className="grid  grid-cols-2 gap-y-10 gap-x-16 text-center md:grid-cols-3"
              sx={{ fontFamily: 'Ubuntu-Regular' }}>
              {DataService.iconTeamData.map((el, index) => (
                <Container key={el.name} className="grid  grid-cols-1">
                  <Icon className="h-36">{el.icon}</Icon>
                  <Text
                    className={`${classes.nameColor} text-base font-semibold`}
                    sx={{ fontFamily: 'Ubuntu-Regular' }}>
                    {el.name}
                  </Text>
                  <Text
                    className={`${classes.roleColor} text-sm font-medium`}
                    sx={{ fontFamily: 'Ubuntu-Regular' }}>
                    {el.role}
                  </Text>
                </Container>
              ))}
            </Box>
          </ContainCards>
        </Ourteam>
      </ContainService>
    </Layout>
  );
};
export const getStaticProps: GetStaticProps = async () => {
  const landingData = await aboutUsService.getLanding();
  const teamData = await aboutUsService.getTeam();
  const navigationHeaderData = await navigationService.getHeader();
  const navigationFooterData = await navigationService.getFooter();
  const pageTitle = await aboutUsService.getPageTitle();

  return {
    props: {
      landingData,
      teamData,
      navigationHeaderData,
      navigationFooterData,
      pageTitle
    }
  };
};
export default AboutUs;
