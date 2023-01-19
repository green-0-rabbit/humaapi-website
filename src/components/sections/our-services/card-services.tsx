import styled from '@emotion/styled';
import { Box, Button } from '@mantine/core';
import { FC } from 'react';
import { IDataDesign, IDataService } from 'src/services/our-service-service';
import CardService from 'src/components/modules/card-service';

interface ICardServices {
  servicesData: IDataService[];
}
const Section = styled.section``;
const Contain = styled.div``;
const CardServices: FC<ICardServices> = (props) => {
  const { servicesData } = props;
  console.log('servicesData', servicesData);

  return (
    <Section className="flex flex-col justify-center xs:text-center md:text-left">
      <Box className="space-y-32 md:space-y-72">
        {servicesData.map((service) => (
          <Contain key={service.id}>
            <CardService
              serviceTitle={service.serviceTitle}
              serviceContent={service.serviceContent}
              serviceLink={service.serviceLink}
              serviceImg={service.serviceImg}
            />
          </Contain>
        ))}
      </Box>
    </Section>
  );
};
export default CardServices;
