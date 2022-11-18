import styled from '@emotion/styled';
import { Box, Text } from '@mantine/core';
import Card from '../elements/card';
import DesignIcon from '../elements/illustrations/design-icon';
import DevopsIcon from '../elements/illustrations/devops-icon';
import MobiledevIcon from '../elements/illustrations/mobile-icon-development';
import WebdevIcon from '../elements/illustrations/web-icon-developement';
import TemplateCarousel from '../modules/carousel';
import Description from '../modules/description';

const OursService = () => {
  const ContainDescription = styled.div``;
  const ContainCards = styled.div``;
  const Container = styled.div``;
  const ContainerCarousel = styled.div``;
  const tableCardService = [
    { icon: <MobiledevIcon />, text: 'Mobile developement' },
    { icon: <WebdevIcon />, text: 'Web development' },
    { icon: <DevopsIcon />, text: 'Devops' },
    { icon: <DesignIcon />, text: 'Design' }
  ];
  return (
    <Box className="grid gap-6 bg-[#fffdfd]">
      <ContainDescription className="text-center mx-4">
        <Text
          color={'#EA6F66'}
          className="font-UbuntuRegular font-normal text-sm">
          Our services
        </Text>
        <Description
          title={'Cover every aspect of your project with our services'}
          content={
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
          }
          classe={'common-description-home'}
          space={3}
        />
      </ContainDescription>
      <ContainCards className="grid place-items-center">
       <Container className="grid gap-y-8 gap-x-12 grid-cols-3">
          {tableCardService.map((el, index) => (
            <Card
              classe={'hidden md:grid gap-3  place-items-center '}
              key={index}
              styleCard={{ width: 205, height: 150, left: 288, top: 858 }}>
              {el.icon}
              <Text color={'#EA6F66'}>{el.text}</Text>
            </Card>
          ))}
        </Container>
      </ContainCards>
      <ContainerCarousel>
        <TemplateCarousel classe={'block md:hidden grid'} dataCourousel={tableCardService} />
        </ContainerCarousel>
    </Box>
  );
};
export default OursService;
