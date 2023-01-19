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

interface IAboutUs {
  landingData: IDataLandingAboutUs[];
  teamData: IDataOurTeam[];
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
  const { landingData, teamData } = props;
  const filter = { ...teamData[0] };
  console.log('landingData', landingData);

  const { classes } = useStyles();

  return (
    <ContainService>
      <LandingAboutUs landingData={landingData[0]} />

      <Ourteam className="mx-4">
        <ContainDescription>
          <Title className="text-center">
            <Description
              title={filter.titleTeam}
              content={filter.contentTeam}
              sx={{
                fontFamily: 'Ubuntu-Bold',
                fontWeight: 700,
                lineHeight: '36px'
              }}
              size={24}
              space={4}
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
  );
};
export const getStaticProps: GetStaticProps = async () => {
   const landingData = await aboutUsService.getLanding();
  const teamData = await aboutUsService.getTeam();

  return {
    props: {
        landingData,
      teamData
    }
  };
};
export default AboutUs;
