import styled from '@emotion/styled';
import { Carousel } from '@mantine/carousel';
import { Box, Text } from '@mantine/core';
import { createStyles } from '@mantine/core';
import Link from 'next/link';
import DataService from 'src/components/content/content-data';
import ActionButton from 'src/components/modules/action-button';
import Card from '../../elements/brand-card';
import TemplateCarousel from '../../modules/carousel';
import Description from '../../modules/description';

const useStyles = createStyles((theme) => ({}));

const OurServices = () => {
  const ContainDescription = styled.div``;
  const ContainCards = styled.div``;
  const Container = styled.div``;
  const ContainerCarousel = styled.div``;
  const { classes } = useStyles();

  return (
    <Box className={`grid gap-6`}>
      <ContainDescription className="text-center mx-4">
        <Text
          color={'#EA6F66'}
          className="font-UbuntuRegular font-bold text-xl mb-2">
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
      <ContainCards className="grid place-items-center mt-0 md:mt-8">
        <Container className="grid gap-8 grid-cols-3">
          {DataService.cardServiceData.map((el) => (
            <Link href={el.link} key={el.text}>
              <Card
                key={el.text}
                cardClass={'hidden md:grid gap-3  place-items-center'}
                style={{ width: 205, height: 150 }}>
                {el.icon}
                <Text color={'#EA6F66'} className="font-UbuntuRegular">
                  {el.text}
                </Text>
              </Card>
            </Link>
          ))}
        </Container>
      </ContainCards>

      {/* <ContainerCarousel> */}
        <TemplateCarousel classeCarrousel={'block md:hidden grid'}>
          {DataService.cardServiceData.map((el, index) => (
            <Carousel.Slide key={index}>
              <Link href={el.link} key={index}>
                <Card
                  cardClass={'grid gap-3  place-items-center snap-center '}
                  key={index}
                  style={{ width: 205, height: 150 }}>
                  {el.icon}
                  <Text color={'#EA6F66'}>{el.text}</Text>
                </Card>
              </Link>
            </Carousel.Slide>
          ))}
        </TemplateCarousel>
        <ActionButton />
      {/* </ContainerCarousel> */}
    </Box>
  );
};
export default OurServices;
