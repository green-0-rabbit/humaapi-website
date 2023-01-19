import { Box } from '@mantine/core';
import { GetStaticProps } from 'next';
import { FC } from 'react';
import CardServices from 'src/components/sections/our-services/card-services';
import HeadOurServices from 'src/components/sections/our-services/header-our-services';

import {
  IDataService,
  OurServicesService
} from 'src/services/our-service-service';
import { HomeService, IDataOurService } from 'src/services/home-service';
interface IOurServices {
  serviceData: IDataService[];
  headerData: IDataOurService[];
}
const OurServices: FC<IOurServices> = ({ ...props }) => {
  const { serviceData, headerData } = props;

  return (
    <Box className="w-full">
      <HeadOurServices headerData={headerData[0]} />
      <CardServices servicesData={serviceData} />
    </Box>
  );
};
export const getStaticProps: GetStaticProps = async () => {
  const headerData = await HomeService.getService();
  const serviceData = await OurServicesService.getAll();

  return {
    props: {
      serviceData,
      headerData
    }
  };
};
export default OurServices;
