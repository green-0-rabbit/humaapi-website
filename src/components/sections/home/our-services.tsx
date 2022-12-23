import styled from '@emotion/styled';
import { Carousel } from '@mantine/carousel';
import { Box, Paper, Text } from '@mantine/core';
import Link from 'next/link';
import DataService from 'src/components/content/content-data';
import generateId from 'src/components/features/generateId';
import TemplateCarousel from '../../modules/carousel';
import Description from '../../modules/description';

const ContainDescription = styled.div``;
const ContainCards = styled.div``;
const Container = styled.div``;
const OurServices = () => (
  <Box className="flex flex-col space-y-16">
    <ContainDescription className="text-center mx-auto">
      <Text
        sx={{
          fontFamily: 'Ubuntu-Regular',
          fontWeight: 700,
          lineHeight: '28px'
        }}
        size="xl"
        color="#EA6F66"
        className="mb-2">
        Our services
      </Text>
      <Description
        title="Cover every aspect of your project with our services"
        content="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        sx={{
          fontFamily: 'Ubuntu-Bold',
          fontWeight: 700,
          lineHeight: '36px'
        }}
        size={32}
        space={4}
      />
    </ContainDescription>
    <ContainCards className="hidden md:flex md:justify-center">
      <Container className="grid gap-8 grid-cols-3">
        {DataService.cardServiceData.map((el) => (
          <Link href={el.link} key={el.text}>
            <Paper
              key={el.text}
              className="flex flex-col items-center justify-center space-y-4"
              style={{ width: 205, height: 150 }}>
              {el.icon}
              <Text color="#EA6F66" sx={{ fontFamily: 'Ubuntu-Regular' }}>
                {el.text}
              </Text>
            </Paper>
          </Link>
        ))}
      </Container>
    </ContainCards>

    <TemplateCarousel
      classeCarrousel="block md:hidden"
      dotSpace="12"
      gridCol="4">
      {DataService.cardServiceData.map((el) => (
        <Carousel.Slide key={generateId()}>
          <Link href={el.link}>
            <Paper
              className="flex flex-col items-center justify-center space-y-4"
              style={{ width: 205, height: 150 }}>
              {el.icon}
              <Text color="#EA6F66">{el.text}</Text>
            </Paper>
          </Link>
        </Carousel.Slide>
      ))}
    </TemplateCarousel>
  </Box>
);
export default OurServices;
