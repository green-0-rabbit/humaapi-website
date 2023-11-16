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
import { IPageData } from 'src/services/home-service';

interface IAboutUs {
  landingData: IAboutUS;
  serviceCardData: IServiceCard[];
  navigationData: INavigation[];
  pageData: IPageData;
  networkData: INetwork[];
}

const ContainService = styled.div``;
const AboutUs: FC<IAboutUs> = ({ ...props }) => {
  const {
    landingData,
    pageData,
    serviceCardData,
    navigationData,
    networkData
  } = props;

  return (
    <Layout
      pageTitle={pageData.title}
      navigationData={navigationData}
      serviceData={serviceCardData}
      networkData={networkData}
      pageSlug={pageData.slug}>
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
  const pageData = await aboutUsService.getPageData();
  const networkData = await navigationService.getNetwork();

  return {
    props: {
      landingData,
      teamData,
      serviceCardData,
      navigationData,
      pageData,
      networkData
    }
  };
};
export default AboutUs;
