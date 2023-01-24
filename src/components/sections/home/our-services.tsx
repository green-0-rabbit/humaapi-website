import styled from '@emotion/styled';
import { Box, Paper, Text } from '@mantine/core';
import Link from 'next/link';
import { FC } from 'react';
import DataService from 'src/components/content/content-data';
import { IDataOurService } from 'src/services/home-service';
import Description from '../../modules/description';
import CarouselHome from './carousel-home';

interface IOurServices {
  serviceData: IDataOurService;
}
const ContainDescription = styled.div``;
const ContainCards = styled.div``;
const Container = styled.div``;
const OurServices: FC<IOurServices> = (props) => {
  const { serviceData } = props;
  return (
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
          title={serviceData.titleService}
          content={serviceData.contentService}
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
      <CarouselHome data={DataService.cardServiceData} />
    </Box>
  );
};
export default OurServices;
