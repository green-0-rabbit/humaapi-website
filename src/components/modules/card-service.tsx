import styled from '@emotion/styled';
import { Box, Button } from '@mantine/core';
import { FC } from 'react';
import navigation from '../features/navigation-hook';
import Description from './description';

interface ICardService {
  serviceTitle: string;
  serviceContent: string;
  serviceLink: string;
  serviceImg: string;
}
const Contain = styled.div``;
const ContainerImage = styled.div``;

const CardService: FC<ICardService> = ({ ...props }) => {
  const { serviceTitle, serviceContent, serviceLink, serviceImg } = props;
  return (
    <Contain className=" flex flex-col justify-center items-center md:flex-row">
      <Box className="w-[85%] md:max-w-xs flex justify-center flex-col md:mr-14  order-last md:order-first">
        <Description
          title={serviceTitle}
          content={serviceContent}
          sx={{
            fontFamily: 'Ubuntu-Bold',
            fontWeight: 700,
            lineHeight: '36px'
          }}
          size={32}
          space={12}
        />
        <Box className="mt-6">
          <Button
            variant="filled"
            className="btn-custom mt-4"
            onClick={() => navigation(`/our-services/${serviceLink}`)}>
            Learn more
          </Button>
        </Box>
      </Box>
      <ContainerImage
        className="flex justify-center relative mb-12 md:m-0"
        dangerouslySetInnerHTML={{ __html: serviceImg }}
      />
    </Contain>
  );
};
export default CardService;
