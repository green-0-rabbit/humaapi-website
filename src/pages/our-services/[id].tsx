import styled from '@emotion/styled';
import { FC } from 'react';
import DataService from 'src/components/content/content-data';
import TheRenders from 'src/components/sections/our-services/sub-component/the-renders';
import Process from 'src/components/sections/our-services/sub-component/process';
import { Box } from '@mantine/core';
import { GetStaticPaths, GetStaticProps } from 'next';
import {
  IDataOurServiceView,
  OurServicesService
} from 'src/services/our-service-service';
import CardService from 'src/components/modules/card-service';

interface IIdOutService {
  serviceData: IDataOurServiceView;
}
const HeaderBannerContain = styled.div``;
const ContainService = styled.div``;
const IdOutService: FC<IIdOutService> = (props) => {
  const { serviceData } = props;

  return (
    <ContainService>
      <HeaderBannerContain className="h-screen mt-[16%] sm:mt-0  grid place-items-center p-5 ">
        <CardService
          id={serviceData.id}
          serviceTitle={serviceData.serviceTitle}
          serviceContent={serviceData.serviceContent}
          serviceLink="/contact-us"
          serviceImg={serviceData.serviceImg}
        />
      </HeaderBannerContain>
      <Box className="space-y-32">
        <TheRenders dataTheRenders={DataService.theRendersData} />
        <Process dataProcess={DataService.processData} />
      </Box>
    </ContainService>
  );
};
export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await OurServicesService.getPaths();
  if (paths) {
    return {
      paths,
      fallback: false
    };
  }

  throw new Error('getStaticPaths error');
};
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = params?.id as string;

  const serviceData = await OurServicesService.getServiceByLink(id);
  if (!serviceData) {
    throw new Error(
      `page ${id} was not found, please check the backend request`
    );
  }
  return {
    props: {
      serviceData
    }
  };
};
export default IdOutService;
