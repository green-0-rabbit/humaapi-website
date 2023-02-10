import styled from '@emotion/styled';
import { FC } from 'react';
import CardService from 'src/components/modules/card-service';
import { IDataDetailsService } from 'src/services/our-service-service';
import { Box } from '@mantine/core';
import TheRenders from 'src/components/sections/our-services/sub-component/weget';
import Process from 'src/components/sections/our-services/sub-component/process';
import DataService from 'src/components/content/content-data';
import { useRouter } from 'next/router';

interface IIdContent {
  serviceData: IDataDetailsService;
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
  return (
    <ContainService>
      <HeaderBannerContain className="mt-[16%] grid h-screen  place-items-center p-5 sm:mt-0 ">
        <CardService
          id={serviceData.id}
          serviceTitle={serviceData.serviceTitle}
          serviceContent={serviceData.serviceContent}
          serviceLink="/contact-us"
          serviceImg={getImage.img}
          nameEvent="Get in touch"
        />
      </HeaderBannerContain>
      <Box className="space-y-32">
        <TheRenders dataWeget={serviceData.whatget} />
        <Process dataProcess={serviceData.process} icons={icons.data} />
      </Box>
    </ContainService>
  );
};
export default IdContent;