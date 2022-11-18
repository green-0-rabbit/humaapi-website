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
    { icon:  <RetailIcon />, text: 'Retail, Ecommerce' },
    { icon:  <EducationIcon />, text: 'Education & e-learning' },
    { icon:  <HelthcareIcon />, text: 'Healthcare & fitness' },
    { icon:  <LogistiqueIcon />, text: 'Logistique & Distribution' },
    { icon: <SocialNetworkIcon />, text: 'Social networking' },
    { icon: <RealStateIcon />, text: 'Real estate' },
    { icon: <TravelHospitalIcon />, text: 'Travel & hospitality' },
    { icon: <FoodRestaurantIcon />, text: 'Food & restaurant' },
    { icon: <DemandSolutionIcon />, text: 'On demand solutions' }
  ];
  return (
    <Box className="grid gap-6 md:gap-12 bg-[#fffdfd]">
      <ContainDomainsActivity className="text-center mx-4">
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
          space={3}
        />
      </ContainDomainsActivity>
      <ContainCards className="grid place-items-center">
        <Container className="grid gap-4 lg:grid-cols-3 md:grid-cols-2">
          {tableCardDomain.map((el, index) => (
           <Card classe={'flex place-items-center space-x-3'} key={index} styleCard={{width: 262,height: 51}}>
          <div className=''>
            {el.icon}
            </div>  
           <Text className=''>{el.text}</Text>
           </Card>
            
          ))}
        </Container>
      </ContainCards>
    </Box>
  );
};
export default DomaineActivity;
