import styled from '@emotion/styled';
import { Box, Text } from '@mantine/core';
import { FC } from 'react';
import DataService from 'src/components/content/content-data';
import { IDataOurService } from 'src/services/home-service';
import { IDataServiceCard } from 'src/services/our-service-service';
import Description from '../../modules/description';
import CarouselHome from './carousel-home';
import OurServiceCard from './sub-component/our-service-card';

interface IOurServices {
  serviceData: IDataOurService;
  serviceCardData: IDataServiceCard;
}
const ContainDescription = styled.div``;
const ContainCards = styled.div``;
const Icons = DataService.serviceSvgIcon;
const OurServices: FC<IOurServices> = (props) => {
  const { serviceData, serviceCardData } = props;

  return (
    <Box className="flex flex-col md:space-y-16">
      <ContainDescription className="mx-auto text-center">
        <Text
          sx={{
            fontFamily: 'Ubuntu-Regular',
            fontWeight: 700,
            lineHeight: '28px'
          }}
          size="xl"
          color="humaapi.0"
          className="mb-1">
          {serviceData.title}
        </Text>
        <Description
          title={serviceData.subTitle}
          content={serviceData.description}
          sx={{
            fontFamily: 'Ubuntu-Bold',
            fontWeight: 700,
            lineHeight: '36px'
          }}
          sxdesc="px-4"
          size={32}
          space={12}
        />
      </ContainDescription>
      <ContainCards className="hidden md:flex md:justify-center">
        <OurServiceCard serviceCardData={serviceCardData} />
      </ContainCards>
      <CarouselHome data={serviceCardData} icons={Icons} />
    </Box>
  );
};
export default OurServices;
