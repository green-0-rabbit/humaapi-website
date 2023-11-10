import styled from '@emotion/styled';
import { Box } from '@mantine/core';
import { FC } from 'react';
import Image from 'next/image';
import { IDataServiceCard } from 'src/services/our-service-service';
import CardService from 'src/components/modules/card-service';
import DataService from 'src/components/content/content-data';

interface ICardServices {
  servicesData: IDataServiceCard;
  parentUrl: string;
}
const Section = styled.section``;
const Contain = styled.div``;
const CardServices: FC<ICardServices> = (props) => {
  const { servicesData, parentUrl } = props;
  const illustration = DataService.serviceSvgIllustration;

  return (
    <Section className="flex flex-col justify-center xs:text-center md:text-left">
      <Box className="space-y-32 md:space-y-72">
        {servicesData.map((service, index) => (
          <Contain key={service.id}>
            <CardService
              id={index + 1}
              serviceTitle={service.title}
              serviceDescription={service.description}
              serviceLink={`${parentUrl}/${service.link}`}
              // serviceImg={illustration[index].img}
              serviceImg={
                <Image
                  src={service.image}
                  alt={service.imageName}
                  className="object-cover object-center"
                  height={252}
                  width={service.link === 'web-development' ? 400 : 299}
                />
              }
            />
          </Contain>
        ))}
      </Box>
    </Section>
  );
};
export default CardServices;
