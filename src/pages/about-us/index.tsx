import styled from '@emotion/styled';
import LandingAboutUs from 'src/components/sections/about-us/landing-page-about-us';
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
import OurTeam from 'src/components/sections/about-us/our-team';

interface IAboutUs {
  landingData: ILandingAboutUsData[];
  teamData: IDataOurTeam[];
  navigationHeaderData: INavigationHeaderData[];
  navigationFooterData: INavigationFooterData[];
  pageTitle: IDataTitle[];
}

const ContainService = styled.div``;
const AboutUs: FC<IAboutUs> = ({ ...props }) => {
  const {
    landingData,
    teamData,
    navigationHeaderData,
    navigationFooterData,
    pageTitle
  } = props;
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
        <OurTeam teamTitle={filterTeamData.titleTeam} />
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
