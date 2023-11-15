/* eslint-disable react/require-default-props */
import styled from '@emotion/styled';
import { Box, Button } from '@mantine/core';
import { FC } from 'react';
import navigation from '../features/navigation-hook';
import ReorderChildren from '../features/orderChildren';
import Description from './description';

interface ICardService {
  id: number;
  serviceTitle: string;
  serviceDescription: string;
  serviceLink: string;
  serviceImg?: JSX.Element;
  nameEvent?: string;
}
const ContainerImage = styled.div``;
const CardService: FC<ICardService> = ({ ...props }) => {
  const {
    id,
    serviceTitle,
    serviceDescription,
    serviceLink,
    serviceImg,
    nameEvent
  } = props;
  const Illustration = serviceImg;

  return (
    <ReorderChildren
      id={id}
      className=" flex flex-col items-center justify-center md:flex-row">
      <Box
        className={`flex w-[85%] flex-col justify-center md:ml-14 ${
          id % 2 !== 0
            ? 'order-last  md:order-first md:max-w-md md:pr-16'
            : 'md:max-w-md'
        }`}>
        <Description
          title={serviceTitle}
          content={serviceDescription}
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
            onClick={() => navigation(`${serviceLink}`)}>
            {nameEvent || 'Learn more'}
          </Button>
        </Box>
      </Box>
      <ContainerImage className="relative mb-12 flex justify-center md:m-0">
        {Illustration}
      </ContainerImage>
    </ReorderChildren>
  );
};
export default CardService;
