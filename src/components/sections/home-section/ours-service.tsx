import styled from '@emotion/styled';
import { Carousel } from '@mantine/carousel';
import { Box, Text } from '@mantine/core';
import Card from '../../elements/card';
import DesignIcon from '../../elements/illustrations/logo-icon/design-icon';
import DevopsIcon from '../../elements/illustrations/logo-icon/devops-icon';
import MobiledevIcon from '../../elements/illustrations/logo-icon/mobile-icon-development';
import WebdevIcon from '../../elements/illustrations/logo-icon/web-icon-developement';
import TemplateCarousel from '../../modules/carousel';
import Description from '../../modules/description';

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
          space={1}
        />
      </ContainDescription>
      <ContainCards className="grid place-items-center mt-8">
        <Container className="grid gap-8 grid-cols-3">
          {tableCardService.map((el, index) => (
            <Card
              className="hidden md:grid gap-3  place-items-center "
              key={index}
              style={{ width: 205, height: 150, left: 288, top: 858 }}>
              {el.icon}
              <Text color={'#EA6F66'}>{el.text}</Text>
            </Card>
          ))}
        </Container>
      </ContainCards>

      <ContainerCarousel>
        <TemplateCarousel classeCarrousel={'block md:hidden grid'}>
          {tableCardService.map((el, index) => (
            <Carousel.Slide key={index}>
              <Card
                className="grid gap-3  place-items-center snap-center"
                key={index}
                style={{ width: 205, height: 150, left: 288, top: 858 }}>
                {el.icon}
                <Text color={'#EA6F66'}>{el.text}</Text>
              </Card>
            </Carousel.Slide>
          ))}
        </TemplateCarousel>
      </ContainerCarousel>
    </Box>
  );
};
export default OursService;
