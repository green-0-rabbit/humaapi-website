import styled from '@emotion/styled';
import { Box, Text } from '@mantine/core';
import AboubacarIcon from 'src/components/elements/personel-icon/ab-icon';
import AurelIcon from 'src/components/elements/personel-icon/aurel-icon';
import FreddyIcon from 'src/components/elements/personel-icon/freddy-icon';
import GratientIcon from 'src/components/elements/personel-icon/gratient-icon';
import SamIcon from 'src/components/elements/personel-icon/sam-icon';
import Description from 'src/components/modules/description';
import LandingAboutUs from 'src/components/sections/about-us/aboutus-landing-page';
import HearderBanner from 'src/components/sections/hearder-banner';

const AboutUs = () => {
  const HearderBannerContain = styled.div``;
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
  const Border = styled.div``;
  const tableTeam = [
    {
      icon: <AurelIcon />,
      role: 'Director & CEO',
      name: 'Aurel AG'
    },
    {
      icon: <AboubacarIcon />,
      role: 'Community manager',
      name: 'Aboubakar Ta'
    },
    {
      icon: <GratientIcon />,
      role: 'Mobile developper',
      name: 'Gratien adn'
    },
    {
      icon: <FreddyIcon />,
      role: 'Developper fullstack',
      name: 'Freddy Bh'
    },
    {
      icon: <SamIcon />,
      role: 'Designer',
      name: 'Samuel  stch'
    }
  ];
  return (
    <ContainService className="space-y-32 md:space-y-52">
      <HearderBanner size="h-[80vh] md:h-[45vh]">
        <HearderBannerContain className="h-screen md:h-[75vh]  grid place-items-center p-5">
        <LandingAboutUs />
          
        </HearderBannerContain>
      </HearderBanner>

      <Ourteam className="mx-4">
        <ContainDescription>
          <Title className="text-center">
            <Description
              title={'Our team'}
              content={
                'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
              }
              classe={'description-title leading-9 font-bold text-[24px]'}
              space={1}
            />
          </Title>
        </ContainDescription>
        <ContainCards className="grid place-items-center mt-12">
        <Contain className='grid  grid-cols-2 md:grid-cols-3 gap-y-10 gap-x-16 text-center font-UbuntuRegular'>
                      {tableTeam.map((el, index) => (
              <Container className="grid  grid-cols-1">
                
                    <Icon className='h-36'>{el.icon}</Icon>
                <Name className="text-base font-semibold text-[#2b2b2b]">
                  {el.name}
                </Name>
                <Role className="text-sm text-gray-500 font-medium">
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
export default AboutUs;
