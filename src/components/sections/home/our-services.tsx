import styled from '@emotion/styled';
import { Carousel } from '@mantine/carousel';
import { Box, Paper, Text } from '@mantine/core';
import { createStyles } from '@mantine/core';
import Link from 'next/link';
import DataService from 'src/components/content/content-data';
import TemplateCarousel from '../../modules/carousel';
import Description from '../../modules/description';

const useStyles = createStyles((theme) => ({}));

const ContainDescription = styled.div``;
const ContainCards = styled.div``;
const Container = styled.div``;
const OurServices = () => {
 

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
      <ContainCards className="hidden md:grid md:place-items-center md:mt-8">
        <Container className="grid gap-8 grid-cols-3">
          {DataService.cardServiceData.map((el) => (
            <Link href={el.link} key={el.text}>
              <Paper
                key={el.text}
               className={'grid gap-3  place-items-center'}
                style={{ width: 205, height: 150 }}>
                {el.icon}
                <Text color={'#EA6F66'} className="font-UbuntuRegular">
                  {el.text}
                </Text>
              </Paper>
            </Link>
          ))}
        </Container>
      </ContainCards>

      <TemplateCarousel classeCarrousel={'block grid md:hidden'} dotSpace={'12'} gridCol={'4'}>
        {DataService.cardServiceData.map((el, index) => (
          <Carousel.Slide key={index}>
            <Link href={el.link} key={el.text}>
              <Paper
                className={'grid gap-3  place-items-center '}
                key={index}
                style={{ width: 205, height: 150 }}>
                {el.icon}
                <Text color={'#EA6F66'}>{el.text}</Text>
              </Paper>
            </Link>
          </Carousel.Slide>
        ))}
      </TemplateCarousel>
    </Box>
  );
};
export default OurServices;
