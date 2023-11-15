import styled from '@emotion/styled';
import { FC } from 'react';
import CardService from 'src/components/modules/card-service';
import { IServicesOverview } from 'src/services/our-service-service';
import Image from 'next/image';
import { Box } from '@mantine/core';
import TheRenders from 'src/components/sections/our-services/sub-component/weget';
import Process from 'src/components/sections/our-services/sub-component/process';
import DataService from 'src/components/content/content-data';
import { useRouter } from 'next/router';

interface IIdContent {
  serviceData: IServicesOverview;
}
const ContainService = styled.div``;
const HeaderBannerContain = styled.div``;

const IdContent: FC<IIdContent> = (props) => {
  const { serviceData } = props;
  const getPath = useRouter();
  const { id } = getPath.query;

  const [getImage] = DataService.serviceSvgIllustration.filter(
    (el) => el.title === id
  );
  const [icons] = DataService.processData.filter((el) => el.service === id);
  const index = DataService.processData.findIndex((el) => el.service === id);

  return (
    <ContainService>
      <HeaderBannerContain className="mt-[16%] grid h-screen  place-items-center p-5 sm:mt-0 ">
        <CardService
          id={index + 1}
          serviceTitle={serviceData.title}
          serviceDescription={serviceData.description}
          serviceLink="/contact-us"
          serviceImg={
            <Image
              src={serviceData.image}
              alt={serviceData.imageName}
              className="object-cover object-center"
              height={342}
              width={serviceData.link === 'web-development' ? 400 : 312}
            />
          }
          nameEvent="Get in touch"
        />
      </HeaderBannerContain>
      <Box className="space-y-32">
        <TheRenders offers={serviceData.offers} />
        <Process process={serviceData.process} icons={icons.data} />
      </Box>
    </ContainService>
  );
};
export default IdContent;
