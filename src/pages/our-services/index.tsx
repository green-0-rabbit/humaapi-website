import { Box } from '@mantine/core';
import { GetStaticProps } from 'next';
import { FC } from 'react';
import CardServices from 'src/components/sections/our-services/card-services';
import HeadOurServices from 'src/components/sections/our-services/header-our-services';
import {
  IDataOurServiceView,
  OurServicesService
} from 'src/services/our-service-service';
import { HomeService, IDataOurService } from 'src/services/home-service';
import Navbar from 'src/components/sections/navbar';
import Footer from 'src/components/sections/footer';
import { parseFooter } from 'src/services/navigation-service/helper-function';
import {
  IDataNavigationFooter,
  INavigationHeaderData,
  navigationService
} from 'src/services/navigation-service';

interface IOurServices {
  serviceDesData: IDataOurServiceView[];
  headerData: IDataOurService[];
  navigationHeaderData: INavigationHeaderData[];
  navigationFooterData: IDataNavigationFooter[];
}
const OurServices: FC<IOurServices> = ({ ...props }) => {
  const {
    serviceDesData,
    headerData,
    navigationHeaderData,
    navigationFooterData
  } = props;
  const itemFooter = parseFooter(navigationFooterData);

  return (
    <>
      <Navbar itemNavLink={navigationHeaderData} />
      <Box className="w-full">
        <HeadOurServices headerData={headerData[0]} />
        <CardServices servicesData={serviceDesData} />
      </Box>
      <Footer itemFooter={itemFooter} />
    </>
  );
};
export const getStaticProps: GetStaticProps = async () => {
  const headerData = await HomeService.getService();
  const serviceDesData = await OurServicesService.getAllServiceDes();
  const navigationHeaderData = await navigationService.getHeader();
  const navigationFooterData = await navigationService.getFooter();

  return {
    props: {
      serviceDesData,
      headerData,
      navigationHeaderData,
      navigationFooterData
    }
  };
};
export default OurServices;
