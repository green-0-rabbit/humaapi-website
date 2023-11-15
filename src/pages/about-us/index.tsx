import styled from '@emotion/styled';
import LandingAboutUs from 'src/components/sections/about-us/landing-page-about-us';
import { GetStaticProps } from 'next';
import { aboutUsService, IAboutUS } from 'src/services/about-us-service';
import { FC } from 'react';
import {
  INavigation,
  INetwork,
  navigationService
} from 'src/services/navigation-service';
import Layout from 'src/layouts/layout';
import OurTeam from 'src/components/sections/about-us/our-team';
import {
  IServiceCard,
  OurServicesService
} from 'src/services/our-service-service';

interface IAboutUs {
  landingData: IAboutUS;
  serviceCardData: IServiceCard[];
  navigationData: INavigation[];
  pageTitle: string;
  networkData: INetwork[];
}

const ContainService = styled.div``;
const AboutUs: FC<IAboutUs> = ({ ...props }) => {
  const {
    landingData,
    pageTitle,
    serviceCardData,
    navigationData,
    networkData
  } = props;

  return (
    <Layout
      pageTitle={pageTitle}
      navigationData={navigationData}
      serviceData={serviceCardData}
      networkData={networkData}>
      <ContainService>
        <LandingAboutUs landingData={landingData} />
        <OurTeam
          teamData={landingData.team}
          teamTitle={landingData.teamTitle}
        />
      </ContainService>
    </Layout>
  );
};
export const getStaticProps: GetStaticProps = async () => {
  const landingData = await aboutUsService.getAll();
  const teamData = await aboutUsService.getTeam();
  const serviceCardData = await OurServicesService.getServiceCard();
  const navigationData = await navigationService.getAll();
  const pageTitle = await aboutUsService.getPageTitle();
  const networkData = await navigationService.getNetwork();

  return {
    props: {
      landingData,
      teamData,
      serviceCardData,
      navigationData,
      pageTitle,
      networkData
    }
  };
};
export default AboutUs;
