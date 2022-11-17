import styled from '@emotion/styled';
import { Box, Text } from '@mantine/core';
import Card from '../elements/card';
import RetailIcon from '../elements/illustrations/icon-retail';
import EducationIcon from '../elements/illustrations/education-icon';
import HelthcareIcon from '../elements/illustrations/healthcare-icon';
import LogistiqueIcon from '../elements/illustrations/logistique-icon';
import SocialNetworkIcon from '../elements/illustrations/social-network-icon';
import RealStateIcon from '../elements/illustrations/real-state-icon';
import TravelHospitalIcon from '../elements/illustrations/travel-hospital-icon';
import FoodRestaurantIcon from '../elements/illustrations/food-restaurant-icon';
import DemandSolutionIcon from '../elements/illustrations/demand-solution-icon';
import Description from '../modules/description';

const DomaineActivity = () => {
  const ContainDomainsActivity = styled.div``;
  const ContainCards = styled.div``;
  const Container = styled.div``;
  const tableCardDomain = [
    { icon: <HelthcareIcon />, text: 'Mobile developement' },
    { icon: <LogistiqueIcon />, text: 'Web development' },
    { icon: <EducationIcon />, text: 'Devops' },
    { icon: <RetailIcon />, text: 'Design' },
    { icon: <SocialNetworkIcon />, text: 'Design' },
    { icon: <RealStateIcon />, text: 'Design' },
    { icon: <TravelHospitalIcon />, text: 'Design' },
    { icon: <FoodRestaurantIcon />, text: 'Design' },
    { icon: <DemandSolutionIcon />, text: 'Design' }
  ];
  return (
    <Box className="grid gap-12 bg-[#fffdfd]">
      <ContainDomainsActivity className="text-center">
        <Text
          color={'#EA6F66'}
          className="font-UbuntuRegular font-normal text-sm">
          Domains activity
        </Text>
        <Description
          title={'Industries we serve'}
          content={
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
          }
          classe={'common-description-home'}
          space={2}
        />
      </ContainDomainsActivity>
      <ContainCards className="grid place-items-center">
        <Container className="grid gap-4 grid-cols-3">
          {tableCardDomain.map((el, index) => (
            <Card classe={'grid grid-cols-2  place-items-center '} key={index} styleCard={{width: 243,height: 51,left: 776,top: 1410}}>
              {el.icon}
              <Text>{el.text}</Text>
            </Card>
          ))}
        </Container>
      </ContainCards>
    </Box>
  );
};
export default DomaineActivity;
