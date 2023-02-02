import styled from '@emotion/styled';
import { Box, Button } from '@mantine/core';
import { FC } from 'react';
import { IDataOurServiceView } from 'src/services/our-service-service';
import CardService from 'src/components/modules/card-service';
import DataService from 'src/components/content/content-data';

interface ICardServices {
  servicesData: IDataOurServiceView[];
}
const Section = styled.section``;
const Contain = styled.div``;
const CardServices: FC<ICardServices> = (props) => {
  const { servicesData } = props;
  const illustration = DataService.serviceSvgIllustration;

  return (
    <Section className="flex flex-col justify-center xs:text-center md:text-left">
      <Box className="space-y-32 md:space-y-72">
        {servicesData.map((service, index) => (
          <Contain key={service.id}>
            <CardService
              id={service.id}
              serviceTitle={service.serviceTitle}
              serviceContent={service.serviceContent}
              serviceLink={`our-services/${service.serviceLink}`}
              serviceImg={illustration[index].img}
            />
          </Contain>
        ))}
      </Box>
    </Section>
  );
};
export default CardServices;
