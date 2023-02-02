import styled from '@emotion/styled';
import { FC } from 'react';
import DataService from 'src/components/content/content-data';
import TheRenders from 'src/components/sections/our-services/sub-component/the-renders';
import Process from 'src/components/sections/our-services/sub-component/process';
import { Box } from '@mantine/core';
import { GetStaticPaths, GetStaticProps } from 'next';
import {
  IDataDetailsService,
  IDataOurServiceView,
  OurServicesService
} from 'src/services/our-service-service';
import CardService from 'src/components/modules/card-service';
import { useRouter } from 'next/router';
import Navbar from 'src/components/sections/navbar';
import Footer from 'src/components/sections/footer';
import { parseFooter } from 'src/services/navigation-service/helper-function';
import {
  IDataNavigationFooter,
  INavigationHeaderData,
  navigationService
} from 'src/services/navigation-service';

interface IIdOutService {
  serviceData: IDataDetailsService;
  navigationHeaderData: INavigationHeaderData[];
  navigationFooterData: IDataNavigationFooter[];
}
const HeaderBannerContain = styled.div``;
const ContainService = styled.div``;
const IdOutService: FC<IIdOutService> = (props) => {
  const { serviceData, navigationHeaderData, navigationFooterData } = props;
  const itemFooter = parseFooter(navigationFooterData);
  const getPath = useRouter();
  const { id } = getPath.query;
  const getImage = DataService.serviceSvgIllustration.find(
    (el) => el.title === id
  );
  return (
    <>
      <Navbar itemNavLink={navigationHeaderData} />
      <ContainService>
        <HeaderBannerContain className="h-screen mt-[16%] sm:mt-0  grid place-items-center p-5 ">
          <CardService
            id={serviceData.id}
            serviceTitle={serviceData.serviceTitle}
            serviceContent={serviceData.serviceContent}
            serviceLink="/contact-us"
            serviceImg={getImage?.img}
          />
        </HeaderBannerContain>
        <Box className="space-y-32">
          <TheRenders dataTheRenders={serviceData.whatget} />
          <Process dataProcess={serviceData.process} />
        </Box>
      </ContainService>
      <Footer itemFooter={itemFooter} />
    </>
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
  const serviceData = await OurServicesService.getByLink(id);
  const navigationHeaderData = await navigationService.getHeader();
  const navigationFooterData = await navigationService.getFooter();
  if (!serviceData) {
    throw new Error(
      `page ${id} was not found, please check the backend request`
    );
  }
  return {
    props: {
      serviceData,
      navigationHeaderData,
      navigationFooterData
    }
  };
};
export default IdOutService;
