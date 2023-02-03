import styled from '@emotion/styled';
import { Box, Paper, Text } from '@mantine/core';
import Link from 'next/link';
import { FC } from 'react';
import DataService from 'src/components/content/content-data';
import { IDataOurService } from 'src/services/home-service';
import { IDataServiceCard } from 'src/services/our-service-service';
import Description from '../../modules/description';
import CarouselHome from './carousel-home';

interface IOurServices {
  serviceData: IDataOurService;
  serviceCardData: IDataServiceCard[];
}
const ContainDescription = styled.div``;
const ContainCards = styled.div``;
const Container = styled.div``;
const DispalyIcons = styled.div``;
const Icons = DataService.serviceSvgIcon;
const OurServices: FC<IOurServices> = (props) => {
  const { serviceData, serviceCardData } = props;

  return (
    <Box className="flex flex-col md:space-y-16">
      <ContainDescription className="text-center mx-auto">
        <Text
          sx={{
            fontFamily: 'Ubuntu-Regular',
            fontWeight: 700,
            lineHeight: '28px'
          }}
          size="xl"
          color="humaapi.0"
          className="mb-1">
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
          mx="0px 14px 0px 14px"
          size={32}
          space={12}
        />
      </ContainDescription>
      <ContainCards className="hidden md:flex md:justify-center">
        <Container className="grid gap-8 grid-cols-3">
          {serviceCardData.map((el, index) => (
            <Link href={`our-services/${el.serviceLink}`} key={el.serviceLink}>
              <Paper
                className="flex flex-col items-center justify-center space-y-4"
                style={{ width: 205, height: 150 }}>
                <DispalyIcons>{Icons[index].icon}</DispalyIcons>
                <Text
                  color="humaapi.0"
                  sx={{ fontFamily: 'Ubuntu-Regular' }}
                  className="text-center">
                  {el.serviceTitle}
                </Text>
              </Paper>
            </Link>
          ))}
        </Container>
      </ContainCards>
      <CarouselHome data={serviceCardData} icons={Icons} />
    </Box>
  );
};
export default OurServices;
