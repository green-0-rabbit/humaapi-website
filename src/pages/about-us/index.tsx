import styled from '@emotion/styled';
import Description from 'src/components/modules/description';
import LandingAboutUs from 'src/components/sections/landing-page-about-us';
import { createStyles } from '@mantine/core';
import DataService from 'src/components/content/content-data';
import { GetStaticProps } from 'next';
import {
  aboutUsService,
  IDataLandingAboutUs,
  IDataOurTeam
} from 'src/services/about-us-service';
import { FC } from 'react';
import Navbar from 'src/components/sections/navbar';
import Footer from 'src/components/sections/footer';
import { parseFooter } from 'src/services/navigation-service/helper-function';
import {
  IDataNavigationFooter,
  INavigationHeaderData,
  navigationService
} from 'src/services/navigation-service';

interface IAboutUs {
  landingData: IDataLandingAboutUs[];
  teamData: IDataOurTeam[];
  navigationHeaderData: INavigationHeaderData[];
  navigationFooterData: IDataNavigationFooter[];
}
const useStyles = createStyles((theme) => ({
  nameColor: { color: theme.colorScheme === 'dark' ? 'white' : '#2b2b2b' },
  roleColor: { color: theme.colorScheme === 'dark' ? '#afaaaa' : '#6B7280' }
}));

const ContainService = styled.div``;
const Title = styled.div``;
const Name = styled.div``;
const Role = styled.div``;
const Icon = styled.div``;
const ContainDescription = styled.div``;
const ContainCards = styled.div``;
const Container = styled.div``;
const Contain = styled.div``;
const Ourteam = styled.div``;
const AboutUs: FC<IAboutUs> = ({ ...props }) => {
  const { landingData, teamData, navigationHeaderData, navigationFooterData } =
    props;
  const filter = { ...teamData[0] };
  const { classes } = useStyles();
  const itemFooter = parseFooter(navigationFooterData);

  return (
    <>
      <Navbar itemNavLink={navigationHeaderData} />
      <ContainService>
        <LandingAboutUs landingData={landingData[0]} />

        <Ourteam className="mx-4">
          <ContainDescription>
            <Title className="text-center">
              <Description
                title={filter.titleTeam}
                sx={{
                  fontFamily: 'Ubuntu-Bold',
                  fontWeight: 700,
                  lineHeight: '36px'
                }}
                size={24}
              />
            </Title>
          </ContainDescription>
          <ContainCards className="grid place-items-center mt-12 ">
            <Contain className="grid  grid-cols-2 md:grid-cols-3 gap-y-10 gap-x-16 text-center font-UbuntuRegular">
              {DataService.iconTeamData.map((el, index) => (
                <Container key={el.name} className="grid  grid-cols-1">
                  <Icon className="h-36">{el.icon}</Icon>
                  <Name
                    className={`${classes.nameColor} text-base font-semibold font-UbuntuRegular`}>
                    {el.name}
                  </Name>
                  <Role
                    className={`${classes.roleColor} text-sm font-UbuntuRegular  font-medium`}>
                    {el.role}
                  </Role>
                </Container>
              ))}
            </Contain>
          </ContainCards>
        </Ourteam>
      </ContainService>
      <Footer itemFooter={itemFooter} />
    </>
  );
};
export const getStaticProps: GetStaticProps = async () => {
  const landingData = await aboutUsService.getLanding();
  const teamData = await aboutUsService.getTeam();
  const navigationHeaderData = await navigationService.getHeader();
  const navigationFooterData = await navigationService.getFooter();

  return {
    props: {
      landingData,
      teamData,
      navigationHeaderData,
      navigationFooterData
    }
  };
};
export default AboutUs;
