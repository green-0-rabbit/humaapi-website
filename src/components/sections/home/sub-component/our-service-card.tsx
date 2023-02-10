import styled from '@emotion/styled';
import Link from 'next/link';
import { FC } from 'react';
import { Paper, Text } from '@mantine/core';

import { IDataServiceCard } from 'src/services/our-service-service';
import DataService from 'src/components/content/content-data';

interface IOurServiceCard {
  serviceCardData: IDataServiceCard[];
}
const DispalyIcons = styled.div``;
const Container = styled.div``;

const OurServiceCard: FC<IOurServiceCard> = (props) => {
  const { serviceCardData } = props;
  const Icons = DataService.serviceSvgIcon;

  return (
    <Container className="grid grid-cols-3 gap-8">
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
  );
};
export default OurServiceCard;
